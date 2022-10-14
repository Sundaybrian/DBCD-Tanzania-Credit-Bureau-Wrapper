import { Config } from "./types";
import axios, { Axios } from "axios"
import parser from "xml2json";
import { DBResponse, DBResponseXML, CustomDBJsonResponse } from "src/types"



export abstract class Base {
    public username: string;
    private baseUrl: string;
    public password: string;
    private client: Axios;


    constructor(config: Config) {
        this.username = config.username;
        this.password = config.password;
        this.baseUrl = config.baseUrl ?? "https://cweb.dnbtanzania.com/TanWebsite/Services/LiveRequestService.svc?wsdl";

        this.client = axios.create({
            headers: {
                "Content-Type": "text/xml; charset=utf-8",
                Accept: "*/*",
                SOAPAction: "http://tempuri.org/ILiveRequestService/GetLiveCIR"
            }
        })
    }


    protected invoke<T>(
        payload: any
    ): Promise<CustomDBJsonResponse> {
        // const config
        return this.client.post(this.baseUrl, payload).then((response) => {

            const results = parser.toJson(response.data, {
                object: true,
                reversible: false,
                coerce: false,
                sanitize: true,
                trim: true,
            }) as any as DBResponse;

            return this.sanitizeResponse(results);

        }).catch(err => { throw err })


    }


    private sanitizeResponse(results: DBResponse): CustomDBJsonResponse {
        const xml = results["s:Envelope"]["s:Body"]["GetLiveCIRResponse"]["GetLiveCIRResult"][
            "a:ResponseXML"
        ];

        let parsed_xml = parser.toJson(xml, {
            object: true,
            reversible: false,
            coerce: false,
            sanitize: true,
            trim: true,
        }) as any as DBResponseXML;

        const isError = parsed_xml.DATAPACKET.HEADER["RESPONSE-TYPE"].DESCRIPTION == "Response Error" ? true : false;


        return {
            hasError: isError,
            results: isError ? parsed_xml.DATAPACKET.BODY["ERROR-LIST"]?.["ERROR-CODE"]! : parsed_xml.DATAPACKET.BODY["SEARCH-RESULT-LIST"]?.["SEARCH-RESULT-ITEM"]!

        }

    }

}
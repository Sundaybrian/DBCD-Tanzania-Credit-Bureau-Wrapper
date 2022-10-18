import { Config } from "./types";
import axios, { Axios } from "axios"
import parser from "xml2json";
import { DBResponse, CustomMultiHitReportReponse, DunAndBResponse, ReportType } from "./types"
import { MultiHitReportReponse } from "./consumer/types/multi_hit_types";
import { Datapacket as SingleHit } from "./consumer/types/single_report_types"
import { isArray } from "./utils"



export abstract class Base {
    public username: string;
    private baseUrl: string;
    public password: string;
    private client: Axios;


    constructor(config: Config) {
        this.username = config.username;
        this.password = config.password;
        this.baseUrl = config.baseUrl ?? "https://cweb.dnbtanzania.com/TanWebsite/Services/LiveRequestService.svc?wsdl";

        // console.log({
        //     u: this.username,
        //     p: this.password
        // })

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
    ): Promise<CustomMultiHitReportReponse> {
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

        }).catch(err => {

            return {
                hasError: true,
                errors: [err.response.status],
                results: [],
                requestParams: null,
                kind: ReportType.errorHit

            }
        })


    }


    private sanitizeResponse(results: DBResponse): CustomMultiHitReportReponse {
        const xml = results["s:Envelope"]["s:Body"]["GetLiveCIRResponse"]["GetLiveCIRResult"][
            "a:ResponseXML"
        ];

        let parsed_xml: DunAndBResponse = parser.toJson(xml, {
            object: true,
            reversible: false,
            coerce: false,
            sanitize: true,
            trim: true,
        }) as any as DunAndBResponse;

        // return single hit merger results
        if ("MERGER_NOTE" in parsed_xml.DATAPACKET) {
            return this.singleHit(parsed_xml)
        }

        // is multihit
        if ("BODY" in parsed_xml.DATAPACKET && "SEARCH-RESULT-LIST" in parsed_xml.DATAPACKET.BODY) {
            return this.multiHit(parsed_xml as MultiHitReportReponse)
        }

        // is errorHIt
        if ("BODY" in parsed_xml.DATAPACKET && "ERROR-LIST" in parsed_xml.DATAPACKET.BODY) {
            return this.errorHit(parsed_xml as MultiHitReportReponse)
        }

        // not found
        return this.notFound(parsed_xml as MultiHitReportReponse);

    }


    private singleHit(parsed_xml: DunAndBResponse) {
        // return single hit merger results
        return {
            hasError: false,
            errors: [],
            results: parsed_xml.DATAPACKET as SingleHit,
            requestParams: null,
            kind: ReportType.consumerReport

        }

    }

    private multiHit(parsed_xml: MultiHitReportReponse) {

        let resultsWithRequestID = [];
        const results = parsed_xml.DATAPACKET.BODY["SEARCH-RESULT-LIST"]?.["SEARCH-RESULT-ITEM"]!;

        const requestParams = parsed_xml.DATAPACKET.HEADER["REQUEST-PARAMETERS"]?.["REPORT-PARAMETERS"]!;

        for (let index = 0; index < results.length; index++) {
            const element = results[index];
            resultsWithRequestID.push({
                ...element,
                "SEARCH-REQUEST-ID": requestParams['SEARCH-REQUEST-ID']
            })
        }

        return {
            hasError: false,
            errors: [],
            results: resultsWithRequestID,
            requestParams,
            kind: ReportType.consumerMultiHit

        }
    }

    private errorHit(parsed_xml: MultiHitReportReponse) {
        const isError = parsed_xml.DATAPACKET.HEADER["RESPONSE-TYPE"].DESCRIPTION == "Response Error" ? true : false;

        const possibleError: any = parsed_xml.DATAPACKET.BODY["ERROR-LIST"]?.["ERROR-CODE"]!;

        return {
            hasError: isError,
            errors: isError ? (isArray(possibleError) ? possibleError : [possibleError]) : [],
            results: [],
            requestParams: isError ? null : parsed_xml.DATAPACKET.HEADER["REQUEST-PARAMETERS"]?.["REPORT-PARAMETERS"]!,
            kind: ReportType.errorHit

        }
    }

    private notFound(parsed_xml: MultiHitReportReponse) {
        return {
            hasError: false,
            errors: [],
            results: [],
            requestParams: parsed_xml.DATAPACKET.SearchDetails?.SearchDetails,
            kind: ReportType.notFoundHit

        }
    }

}
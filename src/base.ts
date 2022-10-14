import { Config } from "./types";
import axios, { Axios } from "axios"
import parser from "xml2json";
import { DBResponse } from "src/types"



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
    ): Promise<DBResponse> {
        // const config
        return this.client.post(this.baseUrl, payload).then((response) => {

            const results = parser.toJson(response.data, {
                object: true,
                reversible: false,
                coerce: false,
                sanitize: true,
                trim: true,
            }) as any as DBResponse;

            return results;

        }).catch(err => { throw err })


    }


}
import { Config } from "./types";
import axios, { Axios } from "axios"



export abstract class Base {
    private username: string;
    private baseUrl: string;
    private password: string;
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
        data: any
    ): Promise<T> {
        // const config
        return this.client.post(this.baseUrl, data).then(response => {
            return response.data
        }).catch(err => { throw err })


    }


}
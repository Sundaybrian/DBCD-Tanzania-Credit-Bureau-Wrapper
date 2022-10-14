export type Config = {
    username: string;
    baseUrl?: string;
    password: string;
}

export type REPORT_ID = 14616 | 14715;
export type NATIONALITIES = "TZ";
export type _PURPOSE_OF_INQUIRY = 1 | 2 | 3 | 4;

export interface SEARCH_PARAMETERS {
    NAME: string;
    IDENTIFIER_NUMBER?: string;
    MOBILE?: string;
    SURROGATES: {
        NATIONALITY: NATIONALITIES;
        DATEOFBIRTH: string;
    },
    ACCOUNTNUMBER?: string,
    CUSTOMERID?: string,
    PURPOSE_OF_INQUIRY: _PURPOSE_OF_INQUIRY


}

export enum PURPOSE_OF_INQUIRY {

    "New Credit Application" = 1,
    "New Guarantor",
    "Review of Existing Customer",
    "Regulatory Audit",

}


export enum SUBJECT_TYPE {
    Consumer = 1,
    Commercial
}


// will be a union type i guess
export interface DBResponse {
    "s:Envelope": {
        "xmlns:s": string;
        "s:Body": {
            "GetLiveCIRResponse": {
                "xmlns": string;
                "GetLiveCIRResult": {
                    "xmlns:a": string;
                    "xmlns:i": string;
                    "a:IsSuccess": string;
                    "a:ResponseXML": string;
                }
            }

        }

    }
};



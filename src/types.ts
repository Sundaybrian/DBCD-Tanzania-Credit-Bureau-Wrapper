
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]



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


export interface SEARCH_CONSUMER_RESULT {
    "ENTITY-KEY": string;
    "NAME": string;
    "DOB": string;
    "GENDER": string;
    "NATIONALITY": string;
    "IDENTIFIER-TYPE": string | {};
    "IDENTIFIER-NUMBER": string | {};
    "ADDRESS": string;
    "MOBILE-NUMBER": string;
    "MATCHED-PARAMETER": string;
    "SEARCHSCORE": string;
}


export interface SEARCH_CONSUMER_RESULT_LIST {

    "SEARCH-RESULT-LIST": {
        "SEARCH-RESULT-ITEM": Partial<SEARCH_CONSUMER_RESULT>[]
    }
}


export interface DBERROR {
    "ERROR-LIST": {
        "ERROR-CODE": string[];
    }
}


export interface DBResponseBody {
    "SEARCH-RESULT-LIST"?: {
        "SEARCH-RESULT-ITEM": Partial<SEARCH_CONSUMER_RESULT>[]
    }

    "ERROR-LIST"?: {
        "ERROR-CODE": string[];
    }
};


export interface DBResponseXML {
    "DATAPACKET": {
        "REQUEST-ID": string;
        "HEADER": {
            "RESPONSE-TYPE": {
                "CODE"?: string;
                "DESCRIPTION": string;
            }
            "REQUEST-PARAMETERS"?: {
                "REPORT-PARAMETERS": {
                    "SEARCH-REQUEST-ID": string;
                    "REPORT-ID": string;
                    "SUBJECT-TYPE": string;
                    "RESPONSE-TYPE": string;
                }
            }
        },
        "BODY": DBResponseBody;
    }
}

export interface CustomDBJsonResponse {
    hasError: boolean;
    results: Partial<SEARCH_CONSUMER_RESULT>[] | string[];
}



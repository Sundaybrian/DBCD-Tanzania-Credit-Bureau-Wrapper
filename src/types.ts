export type Config = {
    username: string;
    baseUrl?: string;
    password: string;
}

export type REPORT_ID = 14616 | 14715;
export type NATIONALITIES = "TZ" ;

export interface SEARCH_PARAMETERS {
    NAME: string;
    IDENTIFIER_NUMBER?: string;
    MOBILE?: string;
    SURROGATES: {
        NATIONALITY: NATIONALITIES;
        DATEOFBIRTH: string;
    }

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


export declare type ConsumerDto = {

}


// will be a union type i guess
export declare type ConsumerResponse = null;



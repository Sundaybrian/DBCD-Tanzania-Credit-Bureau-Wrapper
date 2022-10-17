export interface MultiHitReportReponse {
    DATAPACKET: Datapacket
}

export interface Datapacket {
    REQUEST_ID: string
    HEADER: Header
    BODY: Body
    ReportDetails?: NotFoundReportDetails;
    SearchDetails?: NotFoundSearch;
    MERGER_NOTE?: string
}

export interface Header {
    "RESPONSE-TYPE": ResponseType
    "REQUEST-PARAMETERS"?: RequestParameters
}

export interface ResponseType {
    DESCRIPTION: string
    CODE?: string;
}

export interface RequestParameters {
    "REPORT-PARAMETERS": ReportParameters
}

export interface ReportParameters {
    "SEARCH-REQUEST-ID": string
    "REPORT-ID": string
    "SUBJECT-TYPE": string
    "RESPONSE-TYPE": string
}

export interface Body {
    "SEARCH-RESULT-LIST"?: SearchResultList,
    "ERROR-LIST"?: {
        "ERROR-CODE": string[] | string;
    }
}

export interface SearchResultList {
    "SEARCH-RESULT-ITEM": Partial<SearchResultItem>[]
}

export interface SearchResultItem {
    "ENTITY-KEY": string
    NAME: string
    DOB: string
    GENDER: string
    NATIONALITY: string
    "IDENTIFIER-TYPE": string | {}
    "IDENTIFIER-NUMBER": string | {}
    ADDRESS: string
    "MOBILE-NUMBER": string
    "MATCHED-PARAMETER": string
    SEARCHSCORE: string
}


export interface NotFoundReportDetails {

    "ReportDetails": {
        "CIR_NUMBER": string;
        "RUID": string;
        "USER_ID": string;
        "REPORT_ORDER_DATE": string;
        "INSTITUTION_NAME": string;
    }

}

export interface NotFoundSearch {

    "SearchDetails": {
        "NAME": string;
        "SEARCH_SCORE": string;
        "NATIONALITY": string;
        "DATE_OF_BIRTH": string;
        "RN": string;
    } | any

}

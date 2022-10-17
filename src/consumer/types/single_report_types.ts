export interface SingleConsumerReportResponse {
    DATAPACKET: Datapacket
}


export interface Datapacket {
    MERGER_NOTE: string
    ReportDetails: ReportDetails
    SearchDetails: SearchDetails
    SearchAccountDetails: string
    Cons_CommDetails: ConsCommDetails
    GetIdDetails: GetIdDetails
    CreditProfileOverview: CreditProfileOverview
    CreditProfileOverview_Curr: CreditProfileOverviewCurr
    CreditExposurebyCredit: CreditExposurebyCredit
    ClassificationInsType: ClassificationInsType
    OverdueGraph: OverdueGraph
    Amount_OD_Bucket: string
    Amount_OD_Bucket_Curr: string
    CreditExposurebyProduct: CreditExposurebyProduct
    OD_NOD_Bucket: OdNodBucket
    InquiryHistorySummary: InquiryHistorySummary
    OpenAccounts: OpenAccounts
    ClosedAccounts: string
    GuaranteedLoanDetails: string
    InsuranceAccounts: string
    InquiryHistoryDetails: InquiryHistoryDetails
    EntreprenuerDetails: string
    RelatedPersonsDetails: string
    AddressHistory: AddressHistory
    ContactHistory: ContactHistory
    EmploymentHistory: string
    CreditDisputeDetails: string
    MembershipDetails: string
    MERGER_SUBJECTS: string
    ScoringDetails: ScoringDetails
    ScoringChartDetails: ScoringChartDetails
    ScoreDesc1: ScoreDesc1
    ScoreDesc4: ScoreDesc4
    ScoreDesc2: ScoreDesc2
    ScoreDesc3: ScoreDesc3
}

export interface ReportDetails {
    ReportDetails: ReportDetails2
}

export interface ReportDetails2 {
    CIR_NUMBER: string
    RUID: number
    USER_ID: string
    REPORT_ORDER_DATE: string
    INSTITUTION_NAME: string
}

export interface SearchDetails {
    SearchDetails: SearchDetails2
}

export interface SearchDetails2 {
    NAME: string
    SEARCH_SCORE: string
    NATIONALITY: string
    DATE_OF_BIRTH: string
    RN: number
}

export interface ConsCommDetails {
    Cons_CommDetails: ConsCommDetails2
}

export interface ConsCommDetails2 {
    ENTITY_NAME_EN: string
    SURNAME: string
    MOBILE: number
    DATE_OF_BIRTH: string
    GENDER: string
    NATIONALITY: string
    COUNTRY_OF_BIRTH: string
    MARITAL_STATUS: string
    DISOFBIRTH: string
    ADDRESS: string
    ID_NUMBER: number
}

export interface GetIdDetails {
    GetIdDetails: GetIdDetails2
}

export interface GetIdDetails2 {
    ROWNUM: number
    ID_NUMBER: number
    ID_TYPE: string
}

export interface CreditProfileOverview {
    CreditProfileOverview: CreditProfileOverview2
}

export interface CreditProfileOverview2 {
    ACCCOUNT: number
    NOOFCRSTOWHOMSUBJECTISINDEBTED: number
    COLLATERALCOUNT: number
    NOOFPAIDOFFACSINPAST30DAYS: number
    UNPAIDINSTAL30DAYSOD: number
    UNPAIDINSTAL60DAYSOD: number
    UNPAIDINSTAL360DAYSOD: number
    NUM_OF_INQUIRIES_BY_FA: number
    NOOFACCSUNDERLEGALDISPUTE: number
    NUMOFLOANSGUARANTEED: number
    NOOFACCSASSIGNEDFORCOLLECTION: string
    ACCSUNKNOWNNOOFPASTDUEDAYS: string
    NOOFACCSPROVISIONEDBYCRS: string
    TOTAMTPROVISIONEDBYCRS: string
}

export interface CreditProfileOverviewCurr {
    CreditProfileOverview_Curr: CreditProfileOverviewCurr2
}

export interface CreditProfileOverviewCurr2 {
    TZS_TOTAL_BALANCE: string
    GBP_TOTAL_BALANCE: number
    AED_TOTAL_BALANCE: number
    EUR_TOTAL_BALANCE: number
    USD_TOTAL_BALANCE: number
    OTHER_TOTAL_BALANCE: number
    TZS_TOTAL_AMT_PASTDUE: number
    GBP_TOTAL_AMT_PASTDUE: number
    AED_TOTAL_AMT_PASTDUE: number
    EUR_TOTAL_AMT_PASTDUE: number
    USD_TOTAL_AMT_PASTDUE: number
    OTHER_TOTAL_AMT_PASTDUE: number
}

export interface CreditExposurebyCredit {
    CreditExposurebyCredit: CreditExposurebyCredit2
}

export interface CreditExposurebyCredit2 {
    CURRENCY: string
    PRODUCT: string
    TOTAL_BALANCE_AMT: string
    APPROVAL_AMT: string
    LIABILITY: string
    AMTDISBURSEDINPAST90DAYS: string
    AMTUTILIZEDINPAST90DAYS: string
    TOTAMTPAIDTODATE: string
}

export interface ClassificationInsType {
    ClassificationInsType: ClassificationInsType2
}

export interface ClassificationInsType2 {
    INSTITUTION_TYPE: string
    CURRENCY: string
    NO_OF_ACCOUNTS: number
    TOTAL_APPROVAL_AMOUNT: string
    BALANCE_AMOUNT: string
    OVERDUE_AMOUNT: number
    OVERDUE_PERCENTAGE: number
    SIX_MONTH_CF: number
}

export interface OverdueGraph {
    OverdueGraph: OverdueGraph2[]
}

export interface OverdueGraph2 {
    NONEGATIVESTATUS: number
    INCREASEDRISK: number
    FRAUDTOWARDSBANK: number
    BLOCKED: number
    OTHERSTATUS: number
    MONTHYEAR: string
}

export interface CreditExposurebyProduct {
    CreditExposurebyProduct: CreditExposurebyProduct2
}

export interface CreditExposurebyProduct2 {
    AMOUNTOVERDUE: number
    NOTOVERDUE: string
    PRODUCT: string
    NOOFACTIVECFS: number
    UNUTILISEDCREDIT: string
    CURRENCY: string
}

export interface OdNodBucket {
    OD_NOD_Bucket: OdNodBucket2
    OverdueGraphData: OverdueGraphDaum[]
}

export interface OdNodBucket2 {
    DETAIL: string
    AMOUNT: number
}

export interface OverdueGraphDaum {
    OVER_DUE_AMT: number
    NOT_OVERDUE: number
    CURRENCY: string
}

export interface InquiryHistorySummary {
    InquiryHistorySummary: InquiryHistorySummary2
    InqHstSummeryGraph: InqHstSummeryGraph[]
}

export interface InquiryHistorySummary2 {
    NUM_OF_INQUIRIES: number
    INSTITUTION_TYPE: string
}

export interface InqHstSummeryGraph {
    RATIO_PERCENTAGE?: string
    RATIO?: number
    LABEL: string
    RATIO_CNT: number
}

export interface OpenAccounts {
    OpenAccounts: OpenAccounts2
}

export interface OpenAccounts2 {
    APPROVALAMT: string
    OVERDUEAMT: number
    ACTIVATEDDATE: string
    INSTALLMENTAMT: number
    MATURITYDATE: string
    NUM_OF_INSTALLMENTS: number
    RESCHEDULED_LOAN: string
    NO_OF_OVERDUE_INSTALLMENTS: number
    NUM_OF_INSTALLMENTS_LEFT: number
    PAYMENTMODE: string
    CARDUSEDMONTH: string
    OUTSTANDING_RESIDUAL: string
    USED_AMOUNT: string
    CURRENCY: string
    PRODUCTDESC: string
    PRODUCTDESCLOCAL: string
    REPORTEDDT: string
    LASTPAYMENTDATE: string
    PRIMARY_ROOT_ID: number
    NEGATIVESTATUS: string
    INSTALLMENTTYPE: string
    BANK: string
    PERIODIC_PAYMENT: string
    ECONOMYSECTOR: string
    MONTH1: string
    MONTH2: string
    MONTH3: string
    MONTH4: string
    MONTH5: string
    MONTH6: string
    MONTH7: string
    MONTH8: string
    MONTH9: string
    MONTH10: string
    MONTH11: string
    MONTH12: string
    MONTH13: string
    MONTH14: string
    MONTH15: string
    MONTH16: string
    MONTH17: string
    MONTH18: string
    MONTH19: string
    MONTH20: string
    MONTH21: string
    MONTH22: string
    MONTH23: string
    MONTH24: string
    MONTHVAL1: string
    MONTHVAL2: string
    MONTHVAL3: string
    MONTHVAL4: string
    MONTHVAL5: string
    MONTHINDI1: number
    MONTHINDI2: number
    MONTHINDI3: number
    MONTHINDI4: number
    MONTHINDI5: number
    MONTHINDI6: number
    MONTHINDI7: number
    MONTHINDI8: number
    MONTHINDI9: number
    MONTHINDI10: number
    MONTHINDI11: number
    MONTHINDI12: number
    MONTHINDI13: number
    MONTHINDI14: number
    MONTHINDI15: number
    MONTHINDI16: number
    MONTHINDI17: number
    MONTHINDI18: number
    MONTHINDI19: number
    MONTHINDI20: number
    MONTHINDI21: number
    MONTHINDI22: number
    MONTHINDI23: number
    MONTHINDI24: number
    OVERDUEMONTH1: number
    OVERDUEMONTH2: number
    OVERDUEMONTH3: number
    OVERDUEMONTH4: number
    OVERDUEMONTH5: number
    SecurityDetails: SecurityDetails
}

export interface SecurityDetails {
    PRIMARY_ROOT_ID: number
    COLLATERALTYPE_DESC_EN: string
    SECURITY_VALUE: string
    COLL_REG_NO_OF_SECURITY: string
    COMMENTS: string
}

export interface InquiryHistoryDetails {
    InquiryHistoryDetails: InquiryHistoryDetail[]
}

export interface InquiryHistoryDetail {
    ROWNUM: number
    INQRYDATE: string
    INQPURPOSE: string
    INSTITUTION_TYPE: string
    CURRENCY: string
}

export interface AddressHistory {
    AddressHistory: AddressHistory2
}

export interface AddressHistory2 {
    ROWNUM: number
    ADDRESS_TYPE: string
    ADDRESS: string
    DATE_REPORTED: string
}

export interface ContactHistory {
    ContactHistory: ContactHistory2[]
}

export interface ContactHistory2 {
    ROWNUM: number
    CONTACT_TYPE: string
    CONTACT_DETAIL_EN: number
    DATEREPORTED: string
}

export interface ScoringDetails {
    ScoringDetails: ScoringDetails2
}

export interface ScoringDetails2 {
    SCORE_PER_1: number
    SCORE_VAL_1: number
    SCORE_TEXT_1: string
    SCORE_PER_2: number
    SCORE_VAL_2: string
    SCORE_PER_3: number
    SCORE_VAL_3: string
    SCORE_VAL_31: string
    SCORE_TEXT_41: string
    SCORE_TEXT_42: string
    SCORE_CLUSTER_1: number
    SCORE_PER_52: string
    SCORE_PER_51: string
    PDDURATION: string
    EVALUATIONMONTH: string
    PROBABILITYOFDEFAULT: number
    MAXSCORE: number
    MINSCORE: number
    ENTITYRANK: string
    RANKWITH: string
    RANKWITH1: string
    ENTITYSCORE: number
    PDGUD: number
    PDMAX: number
    EXP_PART: string
    LIVE_EXP_PART: string
}

export interface ScoringChartDetails {
    ScoringChartDetails: ScoringChartDetails2
}

export interface ScoringChartDetails2 {
    MONTH_SCR_01: string
    MONTH_SCR_VAL_01: number
    MONTH_SCR_02: string
    MONTH_SCR_VAL_02: number
    MONTH_SCR_03: string
    MONTH_SCR_VAL_03: number
    MONTH_SCR_04: string
    MONTH_SCR_VAL_04: number
    MONTH_SCR_05: string
    MONTH_SCR_VAL_05: number
    MONTH_SCR_06: string
    MONTH_SCR_VAL_06: number
    MONTH_SCR_07: string
    MONTH_SCR_VAL_07: number
    MONTH_SCR_08: string
    MONTH_SCR_VAL_08: number
    MONTH_SCR_09: string
    MONTH_SCR_VAL_09: number
    MONTH_SCR_10: string
    MONTH_SCR_VAL_10: number
    MONTH_SCR_11: string
    MONTH_SCR_VAL_11: number
    MONTH_SCR_12: string
    MONTH_SCR_VAL_12: number
}

export interface ScoreDesc1 {
    ScoreDesc1: ScoreDesc12[]
}

export interface ScoreDesc12 {
    DESC_NAME: string
    DESC_VAL: string
}

export interface ScoreDesc4 {
    ScoreDesc4: ScoreDesc42[]
    ScoreCatDesc2: ScoreCatDesc2[]
    ScoreCatDesc3: ScoreCatDesc3[]
    ScoreCatDesc4: ScoreCatDesc4[]
    ScoreCatDesc5: ScoreCatDesc5[]
}

export interface ScoreDesc42 {
    RNK: string
    MIN_SCORE: number
    MAX_SCORE: number
    MIN_PD: number
    MAX_PD: number
}

export interface ScoreCatDesc2 {
    RNK: string
    MIN_SCORE: number
    MAX_SCORE: number
    MIN_PD: number
    MAX_PD: number
}

export interface ScoreCatDesc3 {
    RNK: string
    MIN_SCORE: number
    MAX_SCORE: number
    MIN_PD: number
    MAX_PD: number
}

export interface ScoreCatDesc4 {
    RNK: string
    MIN_SCORE: number
    MAX_SCORE: number
    MIN_PD: number
    MAX_PD: number
}

export interface ScoreCatDesc5 {
    RNK: string
    MIN_SCORE: number
    MAX_SCORE: number
    MIN_PD: number
    MAX_PD: number
}

export interface ScoreDesc2 {
    ScoreDesc2: ScoreDesc22[]
}

export interface ScoreDesc22 {
    DESC_NAME: string
    DESC_VAL: string
}

export interface ScoreDesc3 {
    ScoreDesc3: ScoreDesc32[]
}

export interface ScoreDesc32 {
    DESC_NAME: string
    DESC_VAL: string
}

import { SEARCH_PARAMETERS } from "../types";
// import { v4 as uuidv4 } from 'uuid';
//4-Mar-1989
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' 

export function buildXml({ username, password }: { username: string, password: string }, payload: SEARCH_PARAMETERS): string {

    const REQUEST_ID = 1000;

    const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/" xmlns:sil="http://schemas.datacontract.org/2004/07/SilverBladeWeb.Services">
    <soapenv:Header/>
    <soapenv:Body>
        <tem:GetLiveCIR>
            <!--Optional:-->
            <tem:ReqLiveReport>
                <!--Optional:-->
                <sil:EmailID>${username}</sil:EmailID>
                <!--Optional:-->
                <sil:Password>${password}</sil:Password>
                <!--Optional:-->
                <sil:RequestXML>
                    <![CDATA[
                         <REQUEST REQUEST_ID="${REQUEST_ID}">
        <REQUEST_PARAMETERS>
            <REPORT_PARAMETERS REPORT_ID="14616" SUBJECT_TYPE="1" RESPONSE_TYPE="1" />
            <PURPOSE_OF_INQUIRY CODE="${payload.PURPOSE_OF_INQUIRY}" />
            <APPLICATION CURRENCY="" AMOUNT="" TYPEOFCREDITFACILITY="" REFERENCENUMBER="" />
        </REQUEST_PARAMETERS>
        <SEARCH_PARAMETERS>
            <NAME>${payload.NAME}</NAME>
            <IDENTIFIER_NUMBER>${payload.IDENTIFIER_NUMBER}</IDENTIFIER_NUMBER>
            <MOBILE>${payload.MOBILE}</MOBILE>
            <SURROGATES>
                <NATIONALITY>${payload.SURROGATES.NATIONALITY}</NATIONALITY>
                <DATEOFBIRTH>${payload.SURROGATES.DATEOFBIRTH}</DATEOFBIRTH>
            </SURROGATES>
            <ACCOUNTNUMBER>
            ${payload.ACCOUNTNUMBER}
            </ACCOUNTNUMBER>
            <CUSTOMERID>
            ${payload.CUSTOMERID}
            </CUSTOMERID>
        </SEARCH_PARAMETERS>
  </REQUEST>
                    ]]>
        </sil:RequestXML>
    </tem:ReqLiveReport>
</tem:GetLiveCIR>
</soapenv:Body>
</soapenv:Envelope>`;


    return xml
}



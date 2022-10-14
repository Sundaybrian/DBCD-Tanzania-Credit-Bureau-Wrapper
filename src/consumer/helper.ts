import { SEARCH_PARAMETERS } from "src/types";
import { v4 as uuidv4 } from 'uuid';
//4-Mar-1989
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d' 

export function ConsumerSearch(payload: SEARCH_PARAMETERS): string {

    const REQUEST_ID = uuidv4().split("-").at(-1);

    const xml = `
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
    
    `;


    return xml
}



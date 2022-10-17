import { Base } from "../base";
import { SEARCH_PARAMETERS, CustomReponse, GetReportDto } from "../types";
import { buildXml, buildXmlReport } from "./helper"


export class ConsumerSearch extends Base {

    async searchConsumerMultiHit(data: SEARCH_PARAMETERS): Promise<CustomReponse> {

        const xml = buildXml({ username: this.username, password: this.password }, data);

        const response = await this.invoke(xml) as CustomReponse;

        return response

    }


    async getReportConsumer(data: GetReportDto): Promise<CustomReponse> {

        const xml = buildXmlReport({ username: this.username, password: this.password }, data);

        const response = await this.invoke(xml) as CustomReponse;

        return response
    }

}
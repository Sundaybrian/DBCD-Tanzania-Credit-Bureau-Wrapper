import { Base } from "../base";
import { SEARCH_PARAMETERS, CustomDBJsonResponse } from "../types";
import { buildXml } from "./helper"


export class ConsumerSearch extends Base {

    async searchConsumerMultiHit(data: SEARCH_PARAMETERS): Promise<CustomDBJsonResponse> {

        const xml = buildXml({ username: this.username, password: this.password }, data);

        const response = await this.invoke(xml) as CustomDBJsonResponse;

        return response

    }

}
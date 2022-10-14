import { Base } from "src/base";
import { SEARCH_PARAMETERS, CustomDBJsonResponse } from "src/types";
import { ConsumerSearch } from "./helper"


export class Consumer extends Base {

    async searchConsumerMultiHit(data: SEARCH_PARAMETERS): Promise<CustomDBJsonResponse> {

        const xml = ConsumerSearch(data);

        const response: CustomDBJsonResponse = await this.invoke(xml);

        return response

    }

}
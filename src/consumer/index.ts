import { Base } from "src/base";
import { ConsumerDto, ConsumerResponse } from "src/types";


export class Consumer extends Base {

    searchClient(data: ConsumerDto): Promise<ConsumerResponse> {

        return this.invoke(data);
    }


}
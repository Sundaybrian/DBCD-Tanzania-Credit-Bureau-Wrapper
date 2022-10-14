import { Base } from "src/base";
import { ConsumerDto, ConsumerResponse } from "src/types";


export class Consumer extends Base {

    searchClientsByParams(data: ConsumerDto): Promise<ConsumerResponse> {

        return this.invoke(data);
    }


    getClientBySearchScore(){

    }

    


}
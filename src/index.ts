import { Base} from "./base";
import  {Consumer} from "src/consumer";
import { applyMixins } from "./utils";

class DB extends Base{}
interface DB extends Consumer {}

applyMixins(DB, [Consumer]);

export default DB
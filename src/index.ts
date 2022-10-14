import { Base } from "./base";
import { ConsumerSearch } from "./consumer";
import { applyMixins } from "./utils";

class DB extends Base {}
interface DB extends ConsumerSearch {}

applyMixins(DB, [ConsumerSearch]);

export default DB
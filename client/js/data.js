import Json from "../../assets/**/*.json";
// import Xml from "../../assets/**/*.xml";
// import Text from "../../assets/**/*.txt";

import { iterate } from "./utils/utils";

console.log("JSON");
console.log(Json);

export default {
  json: Json.spritesheets
  // xml: Object.assign(...iterate(Xml, "")),
  // txt: Object.assign(...iterate(Text, ""))
};

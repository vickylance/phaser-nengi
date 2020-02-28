import Mp3Sounds from "../../assets/**/*.mp3";
import OggSounds from "../../assets/**/*.ogg";

import { iterate } from "./utils/utils";

export default {
  mp3Sounds: Object.assign(...iterate(Mp3Sounds, "")),
  oggSounds: Object.assign(...iterate(OggSounds, ""))
};

import Macro from "./macro";
import { ExtensionKey } from "./types";

const commands: { [key: string]: Macro } = {
  [`${ExtensionKey}.upSelected`]: new Macro(1, false),
  [`${ExtensionKey}.downSelected`]: new Macro(-1, false),
  [`${ExtensionKey}.upAllOfPage`]: new Macro(1, true),
  [`${ExtensionKey}.downAllOfPage`]: new Macro(-1, true)
};

export default commands;

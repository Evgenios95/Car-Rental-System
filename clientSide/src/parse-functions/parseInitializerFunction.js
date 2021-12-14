import Parse from "parse";
import { APILabels } from "../text-labels/parse-labels";

export const initializeParse = async () => {
  Parse.initialize(
    process.env.REACT_APP_PARSE_APPLICATION_KEY,
    process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
  );

  Parse.serverURL = APILabels.url;
};

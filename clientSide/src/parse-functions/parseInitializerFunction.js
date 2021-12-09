import Parse from "parse";

export const initializeParse = async () => {
  Parse.initialize(
    process.env.REACT_APP_PARSE_APPLICATION_KEY,
    process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
  );

  Parse.serverURL = "https://parseapi.back4app.com/";
};

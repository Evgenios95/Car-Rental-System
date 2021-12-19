import Parse from "parse";
import { ErrorLabels } from "../text-labels/parse-labels";

export const login = async (e, username, password, navigate) => {
  e.preventDefault();
  try {
    await Parse.User.logIn(username, password);
    navigate("/book");
  } catch (error) {
    console.error(ErrorLabels.login, error);
    alert(ErrorLabels.loginAlert);
  }
};

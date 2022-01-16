import { Navigate } from "react-router-dom";
import Parse from "parse";

const AuthWrapper = ({ children }) => {
  if (Parse.User.current() !== null) {
    let isAuthenticated = Parse.User.current().getSessionToken();
    let authCondition = isAuthenticated !== undefined;
    if (authCondition) {
      return children;
    }
  }
  return <Navigate to={"/login"} />;
};

export default AuthWrapper;

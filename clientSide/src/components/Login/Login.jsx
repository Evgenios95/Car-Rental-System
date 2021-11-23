import { GeneralText } from "../../text/text";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CrButton from "../Button/Button";
import InputComponent from "../Input/input";
import "./Login.css";
import Parse from "parse";

const LoginComponent = () => {
  // btw useHistory is recently replaced by useNavigate <3
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUserName(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    (async () => {
      try {
        // Pass the username and password to logIn function
        let user = await Parse.User.logIn(username, password);
        // Do stuff after successful login
        navigate("/");
        console.log("Logged in user", user);
      } catch (error) {
        console.error("Error while logging in user", error);
        alert("Not a valid user");
      }
    })();
  };

  return (
    <div className="login-container">
      <div className="login-container-inside">
        <div className="login-title">{GeneralText.login}</div>
        <form onSubmit={submitHandler}>
          <div className="input-fields-wrapper">
            <InputComponent
              onChange={handleUserName}
              labelText={GeneralText.userText}
              type={"text"}
              inputPlaceholder={GeneralText.placeHText}
            ></InputComponent>
            <InputComponent
              onChange={handlePassword}
              labelText={GeneralText.pwText}
              type={"text"}
              inputPlaceholder={GeneralText.placeHText}
            ></InputComponent>
            <CrButton btnText={GeneralText.login} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

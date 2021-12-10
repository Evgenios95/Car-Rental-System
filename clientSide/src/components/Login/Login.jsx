import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import "./Login.css";
import Parse from "parse";
import { GeneralLabels } from "../../text-labels/text-labels";
import Button from "../Button/Button";

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
        navigate("/book");
        console.log("Logged in user", user);
      } catch (error) {
        console.error("Error while logging in user", error);
        alert("Not a valid user");
      }
    })();
  };

  return (
    <div className="login-container">
      <div className="login-inner-container">
        <div className="login-title">{GeneralLabels.login}</div>
        <form onSubmit={submitHandler}>
          <div className="input-fields-wrapper">
            <LabeledInput
              onChange={handleUserName}
              labelText={GeneralLabels.username}
              type={"text"}
              inputPlaceholder={GeneralLabels.placeholder}
              className="login-input-item"
            ></LabeledInput>
            <LabeledInput
              onChange={handlePassword}
              labelText={GeneralLabels.password}
              type={"password"}
              inputPlaceholder={GeneralLabels.placeholder}
              className="login-input-item"
            ></LabeledInput>
            <Button btnText={GeneralLabels.login} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LabeledInput from "../LabeledInput/LabeledInput";
import "./Login.css";
import { GeneralLabels } from "../../text-labels/text-labels";
import Button from "../Button/Button";
import { login } from "../../parse-functions/loginFunction";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-inner-container">
        <div className="login-title">{GeneralLabels.login}</div>
        <form onSubmit={(e) => login(e, username, password, navigate)}>
          <div className="input-fields-wrapper">
            <LabeledInput
              onChange={({ target }) => setUsername(target.value)}
              labelText={GeneralLabels.username}
              type={"text"}
              inputPlaceholder={GeneralLabels.placeholder}
              className="login-input-item"
            ></LabeledInput>
            <LabeledInput
              onChange={({ target }) => setPassword(target.value)}
              labelText={GeneralLabels.password}
              type={"password"}
              inputPlaceholder={GeneralLabels.placeholder}
              className="login-input-item"
            ></LabeledInput>
            <Button
              className="btn--primary"
              btnText={GeneralLabels.login}
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

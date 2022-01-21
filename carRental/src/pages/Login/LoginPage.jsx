import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import "./Login.css";
import { GeneralLabels } from "../../utils/constants/general-labels";
import Button from "../../components/Button/Button";
import { login } from "../../utils/parse-functions/loginFunction";
import Subtitle from "../../components/Subtitle/Subtitle";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-container">
      <div className="login-inner-container">
        <Subtitle stitle={GeneralLabels.login} />
        <form onSubmit={(e) => login(e, username, password, navigate)}>
          <div className="login-inputs-wrapper">
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

export default LoginPage;

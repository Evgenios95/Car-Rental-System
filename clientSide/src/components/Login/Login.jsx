import { text } from "../../text/text";
import { useNavigate } from "react-router-dom";
import CrButton from "../Button/Button";
import InputComponent from "../Input/input";
import "./Login.css";

const LoginComponent = () => {
  // btw useHistory is recently replaced by useNavigate <3
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-container-inside">
        <div className="login-title">{text.login}</div>
        <form onSubmit={submitHandler}>
          <div className="input-fields-wrapper">
            <InputComponent
              labelText={text.userText}
              inputPlaceholder={text.placeHText}
            ></InputComponent>
            <InputComponent
              labelText={text.pwText}
              inputPlaceholder={text.placeHText}
            ></InputComponent>
            <CrButton btnText={text.login} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

import { text } from "../../text/text";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import CrButton from "../Button/Button";
import InputComponent from "../Input/input";
import "./Login.css";
import Parse from "parse";




const LoginComponent = () => {
  // btw useHistory is recently replaced by useNavigate <3
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  function handleUserName(e){
    setUsername(e.target.value)
   }
   function handlePassword(e){
    setPassword(e.target.value)
   }

  const submitHandler = (e) => {
    e.preventDefault();
    (async () => {
      try {
        // Pass the username and password to logIn function
        let user = await Parse.User.logIn(username, password);
        // Do stuff after successful login
        navigate("/");
        console.log('Logged in user', user);
      } catch (error) {
        console.error('Error while logging in user', error);
        alert("Not a valid user")
      }
    })();    
  }
  return (
    <div className="login-container">
      <div className="login-container-inside">
        <div className="login-title">{text.login}</div>
        <form onSubmit={submitHandler}>
          <div className="input-fields-wrapper">
            <InputComponent 
              onChange={handleUserName}
              labelText={text.userText}
              inputPlaceholder={text.placeHText}
            ></InputComponent>
            <InputComponent
              type = "password"
              onChange={handlePassword}
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

import CrButton from "../Button/Button";
import "./StartingPageImage.css";
import { useNavigate } from "react-router-dom";

const StartingPageImage = () => {
  const navigate = useNavigate();

  const navigateToPath = () => {
    navigate("/login");
  };

  return (
    <div className="starting-page-image">
      <img src="./images/itu-cars1.jpg" alt=""></img>
      <div className="button-holder">
        <CrButton
          className="login-button"
          btnText="Login"
          btnColor="black"
          btnBgColor="lightgray"
          onClick={navigateToPath}
        />
      </div>
    </div>
  );
};

export default StartingPageImage;

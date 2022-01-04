import Button from "../Button/Button";
import "./StartingPage.css";
import { useNavigate } from "react-router-dom";

const StartingPage = () => {
  const navigate = useNavigate();

  const navigateToPath = () => {
    navigate("/login");
  };

  return (
    <div className="starting-page-image">
      <img src="./images/itu-cars1.jpg" alt=""></img>
      <div className="button-holder">
        <Button
          className="btn--starting-page"
          btnText="Login"
          onClick={navigateToPath}
        />
      </div>
    </div>
  );
};

export default StartingPage;

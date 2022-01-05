import Button from "../../components/Button/Button";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToPath = () => {
    navigate("/login");
  };

  return (
    <div className="starting-page-image">
      <img src="./images/itu-cars1.jpg" alt=""></img>
      <div className="button-holder">
        <Button
          className="btn--home-page"
          btnText="Login"
          onClick={navigateToPath}
        />
      </div>
    </div>
  );
};

export default HomePage;

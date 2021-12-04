import DropDown from "../DropDown/DropDown";
import InputComponent from "../Input/input";
import Subtitles from "../Subtitles/Subtitles";

const ReturnCarComponent = (props) => {
  return (
    <div>
      <Subtitles stitle="Return" />
      <div style={{ margin: "0 20px" }}>
        <div>
          <InputComponent
            labelText={"Return date*"}
            type="date"
          ></InputComponent>
          <InputComponent
            labelText={"Return time*"}
            type="time"
          ></InputComponent>
        </div>
        <DropDown type="RentalOffice" labeltext="Region" attribute="region" />
      </div>
    </div>
  );
};

export default ReturnCarComponent;

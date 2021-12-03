import DropDown from "../DropDown/DropDown";
import InputComponent from "../Input/input";
import Subtitles from "../Subtitles/Subtitles";

const PickUpCarComponent = () => {
  return (
    <div>
      <Subtitles stitle="Pick Up" />
      <div style={{ margin: "0 20px" }}>
        <div>
          <InputComponent
            labelText={"Pick-up date*"}
            type="date"
          ></InputComponent>
          <InputComponent
            labelText={"Pick-up time*"}
            type="time"
          ></InputComponent>
        </div>
        <DropDown type="CarGroup" labeltext="Car Group*" attribute="name" />
        <DropDown type="RentalOffice" labeltext="Region*" attribute="region" />
      </div>
    </div>
  );
};

export default PickUpCarComponent;

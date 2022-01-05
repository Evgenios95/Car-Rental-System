import "./BookPage.css";
import { SubtitleLabels } from "../../utils/constants/general-labels";
import { useLocation } from "react-router-dom";
import { onChangeHandler } from "../../utils/functions/onChangeHandlers";
import DropDown from "../../components/DropDown/DropDown";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import Subtitle from "../../components/Subtitle/Subtitle";

const PickUpCar = ({ setFormData }) => {
  const location = useLocation();

  return (
    <div>
      <Subtitle stitle={SubtitleLabels.pickUp} />

      <div className="booking-inner-container">
        <LabeledInput
          labelText={"Pick-up date*"}
          type="date"
          onChange={(e) => onChangeHandler(e, "pickupDate", setFormData)}
        ></LabeledInput>

        <LabeledInput
          labelText={"Pick-up time*"}
          type="time"
          onChange={(e) => onChangeHandler(e, "pickUpTime", setFormData)}
        ></LabeledInput>

        <DropDown
          type="CarGroup"
          labeltext="Car Group*"
          attribute="name"
          onChange={(e) => onChangeHandler(e, "carGroup", setFormData)}
        />

        <DropDown
          type="RentalOffice"
          labeltext="Rental office*"
          attribute="officeNumber"
          onChange={(e) => onChangeHandler(e, "pickUpOffice", setFormData)}
        />

        {location.pathname === "/walkin-book" && (
          <DropDown
            type="Car"
            labeltext="Car *"
            attribute="model"
            onChange={(e) => onChangeHandler(e, "car", setFormData)}
          />
        )}
      </div>
    </div>
  );
};

export default PickUpCar;

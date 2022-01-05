import "./BookingComponent.css";
import { SubtitleLabels } from "../../text-labels/text-labels";
import DropDown from "../DropDown/DropDown";
import LabeledInput from "../LabeledInput/LabeledInput";
import Subtitle from "../Subtitle/Subtitle";
import { onChangeHandler } from "../../functions/onChangeHandlers";
import { useLocation } from "react-router-dom";

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

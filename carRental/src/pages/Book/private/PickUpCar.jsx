import "../BookPage.css";
import { SubtitleLabels } from "../../../utils/constants/general-labels";
import { useLocation } from "react-router-dom";
import { onChangeHandler } from "../../../utils/functions/onChangeHandlers";
import LabeledInput from "../../../components/LabeledInput/LabeledInput";
import Subtitle from "../../../components/Subtitle/Subtitle";
import DropDown from "../../../components/DropDowns/DropDown";
import DropDownWalkIn from "../../../components/DropDowns/DropDownWalkIn";

const PickUpCar = ({ setFormData }) => {
  const location = useLocation();

  //Make this a reusable function
  var date = new Date();
  var isoDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  return (
    <div>
      <Subtitle stitle={SubtitleLabels.pickUp} />

      <div className="booking-inner-container">
        <LabeledInput
          labelText={"Pick-up date*"}
          type="date"
          min={isoDateTime}
          onChange={(e) => onChangeHandler(e, "pickupDate", setFormData)}
        ></LabeledInput>

        <DropDown
          type="time"
          labeltext={"Pick up time*"}
          onChange={(e) => onChangeHandler(e, "pickUpTime", setFormData)}
          isTimeDropdown
        />

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
          <DropDownWalkIn
            labeltext="Choose specific car"
            onChange={(e) => onChangeHandler(e, "specificCar", setFormData)}
          />
        )}
      </div>
    </div>
  );
};

export default PickUpCar;

import { SubtitleLabels } from "../../text-labels/text-labels";
import "./BookingComponent.css";
import DropDown from "../DropDown/DropDown";
import LabeledInput from "../LabeledInput/LabeledInput";
import Subtitle from "../Subtitle/Subtitle";
import { onChangeHandler } from "../../parse-functions/onChangeHandlers";

const ReturnCar = ({ setFormData }) => {
  return (
    <div>
      <Subtitle stitle={SubtitleLabels.return} />

      <div className="booking-inner-container">
        <LabeledInput
          labelText={"Return date*"}
          type="date"
          onChange={(e) => onChangeHandler(e, "returnDate", setFormData)}
        ></LabeledInput>

        <LabeledInput
          labelText={"Return time*"}
          type="time"
          onChange={(e) => onChangeHandler(e, "returnTime", setFormData)}
        ></LabeledInput>

        <DropDown
          type="RentalOffice"
          labeltext="Rental office*"
          onChange={(e) => onChangeHandler(e, "returnOffice", setFormData)}
          attribute="officeNumber"
        />
      </div>
    </div>
  );
};

export default ReturnCar;

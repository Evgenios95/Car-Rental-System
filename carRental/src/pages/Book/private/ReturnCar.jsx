import { SubtitleLabels } from "../../../utils/constants/general-labels";
import "../BookPage.css";
import LabeledInput from "../../../components/LabeledInput/LabeledInput";
import Subtitle from "../../../components/Subtitle/Subtitle";
import { onChangeHandler } from "../../../utils/functions/onChangeHandlers";
import DropDown from "../../../components/DropDowns/DropDown";
import DropDownWalkIn from "../../../components/DropDowns/DropDownWalkIn";

const ReturnCar = ({ setFormData }) => {
  //Make this a reusable function
  var date = new Date();
  var isoDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  return (
    <div>
      <Subtitle stitle={SubtitleLabels.return} />

      <div className="booking-inner-container">
        <LabeledInput
          labelText={"Return date*"}
          type="date"
          min={isoDateTime}
          onChange={(e) => onChangeHandler(e, "returnDate", setFormData)}
        ></LabeledInput>

        <DropDown
          type="time"
          labeltext="Return time*"
          onChange={(e) => onChangeHandler(e, "returnTime", setFormData)}
          isTimeDropdown
        />

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

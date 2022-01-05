import { SubtitleLabels } from "../../utils/constants/general-labels";
import "./BookPage.css";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import Subtitle from "../../components/Subtitle/Subtitle";
import { onChangeHandler } from "../../utils/functions/onChangeHandlers";
import DropDown from "../../components/DropDown/DropDown";

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

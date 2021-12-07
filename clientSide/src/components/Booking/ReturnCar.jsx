import { SubtitleLabels } from "../../text-labels/text-labels";
import "./BookingComponent.css";
import DropDown from "../DropDown/DropDown";
import LabeledInput from "../LabeledInput/LabeledInput";
import Subtitle from "../Subtitle/Subtitle";

const ReturnCarComponent = ({ setFormData }) => {
  return (
    <div>
      <Subtitle stitle={SubtitleLabels.return} />
      <div className="booking-inner-container">
        <div>
          <LabeledInput
            labelText={"Return date*"}
            type="date"
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                returnDate: target.value,
              }))
            }
          ></LabeledInput>
          <LabeledInput
            labelText={"Return time*"}
            type="time"
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                returnTime: target.value,
              }))
            }
          ></LabeledInput>
        </div>
        <DropDown
          type="RentalOffice"
          labeltext="Rental office*"
          onChange={({ target }) =>
            setFormData((c) => ({
              ...c,
              returnOffice: target.value,
            }))
          }
          attribute="officeNumber"
        />
      </div>
    </div>
  );
};

export default ReturnCarComponent;

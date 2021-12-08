import "./BookingComponent.css";
import { SubtitleLabels } from "../../text-labels/text-labels";
import DropDown from "../DropDown/DropDown";
import LabeledInput from "../LabeledInput/LabeledInput";
import Subtitle from "../Subtitle/Subtitle";

const PickUpCar = ({ setFormData }) => {
  return (
    <div>
      <Subtitle stitle={SubtitleLabels.pickUp} />

      <div className="booking-inner-container">
        <LabeledInput
          labelText={"Pick-up date*"}
          type="date"
          onChange={({ target }) =>
            setFormData((c) => ({
              ...c,
              pickupDate: target.value,
            }))
          }
        ></LabeledInput>

        <LabeledInput
          labelText={"Pick-up time*"}
          type="time"
          onChange={({ target }) =>
            setFormData((c) => ({
              ...c,
              pickupTime: target.value,
            }))
          }
        ></LabeledInput>

        <DropDown
          type="CarGroup"
          labeltext="Car Group*"
          attribute="name"
          onChange={({ target }) =>
            setFormData((c) => ({
              ...c,
              carGroup: target.value,
            }))
          }
        />

        <DropDown
          type="RentalOffice"
          labeltext="Rental office*"
          attribute="officeNumber"
          onChange={({ target }) =>
            setFormData((c) => ({
              ...c,
              pickUpOffice: target.value,
            }))
          }
        />
      </div>
    </div>
  );
};

export default PickUpCar;

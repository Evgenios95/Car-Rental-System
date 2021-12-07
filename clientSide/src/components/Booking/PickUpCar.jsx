import "./BookingComponent.css";
import { SubtitleLabels } from "../../text-labels/text-labels";
import DropDown from "../DropDown/DropDown";
import LabeledInput from "../LabeledInput/LabeledInput";
import Subtitle from "../Subtitle/Subtitle";

const PickUpCarComponent = ({ setFormData }) => {
  return (
    <div>
      <Subtitle stitle={SubtitleLabels.pickUp} />
      <div className="booking-inner-container">
        <div>
          <LabeledInput
            labelText={"Pick-up date*"}
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                // pickupDate: new Date(target.value).toLocaleDateString(),
                pickupDate: target.value,
              }))
            }
            type="date"
          ></LabeledInput>
          <LabeledInput
            labelText={"Pick-up time*"}
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                pickupTime: target.value,
              }))
            }
            type="time"
          ></LabeledInput>
        </div>
        <DropDown
          type="CarGroup"
          labeltext="Car Group*"
          onChange={({ target }) =>
            setFormData((c) => ({
              ...c,
              carGroup: target.value,
            }))
          }
          attribute="name"
        />
        <DropDown
          type="RentalOffice"
          labeltext="Rental office*"
          onChange={({ target }) =>
            setFormData((c) => ({
              ...c,
              pickUpOffice: target.value,
            }))
          }
          attribute="officeNumber"
        />
      </div>
    </div>
  );
};

export default PickUpCarComponent;

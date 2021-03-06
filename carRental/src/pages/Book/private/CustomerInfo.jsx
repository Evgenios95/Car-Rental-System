import "../BookPage.css";
import {
  CustomerInfoLabels,
  GeneralLabels,
  SubtitleLabels,
} from "../../../utils/constants/general-labels";
import Subtitle from "../../../components/Subtitle/Subtitle";
import LabeledInput from "../../../components/LabeledInput/LabeledInput";
import {
  onChangeIntHandler,
  onChangeHandler,
} from "../../../utils/functions/onChangeHandlers";

const CustomerInfo = ({ setFormData }) => {
  return (
    <>
      <Subtitle stitle={SubtitleLabels.customerInfo} />

      <div className="customer-info-container">
        <div>
          <LabeledInput
            labelText={CustomerInfoLabels.firstName}
            type="text"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={(e) => onChangeHandler(e, "firstName", setFormData)}
          ></LabeledInput>

          <LabeledInput
            labelText={CustomerInfoLabels.lastName}
            type="text"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={(e) => onChangeHandler(e, "lastName", setFormData)}
          ></LabeledInput>
        </div>

        <div>
          <LabeledInput
            labelText={CustomerInfoLabels.age}
            type="number"
            inputPlaceholder={GeneralLabels.placeholder}
            min="18"
            onChange={(e) => onChangeIntHandler(e, "age", setFormData)}
          ></LabeledInput>

          <LabeledInput
            labelText={CustomerInfoLabels.driversLicensNo}
            type="text"
            pattern="^[0-9]{8}$"
            title="Insert a 8-digit driver's license!"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={(e) =>
              onChangeIntHandler(e, "driversLicenseNo", setFormData)
            }
          ></LabeledInput>
        </div>

        <div>
          <LabeledInput
            labelText={CustomerInfoLabels.address}
            type="text"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={(e) => onChangeHandler(e, "address", setFormData)}
          ></LabeledInput>

          <LabeledInput
            labelText={CustomerInfoLabels.phoneNo}
            type="text"
            inputPlaceholder={GeneralLabels.placeholder}
            pattern="^[0-9]{8}$"
            title="Insert an 8-digit phone-number!"
            onChange={(e) => onChangeIntHandler(e, "phoneNo", setFormData)}
          ></LabeledInput>
        </div>

        <div>
          <LabeledInput
            labelText={CustomerInfoLabels.email}
            type="email"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={(e) => onChangeHandler(e, "email", setFormData)}
          ></LabeledInput>
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;

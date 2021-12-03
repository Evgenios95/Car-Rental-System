import "./CustomerInfo.css";
import LabeledInput from "../LabeledInput/LabeledInput";
import {
  CustomerInfoLabels,
  GeneralLabels,
} from "../../text-labels/text-labels";

const CustomerInfo = () => {
  return (
    <div className="customer-info-container">
      {/* <p>{CustomerInfoLabels.title}</p> */}
      <div>
        <LabeledInput
          labelText={CustomerInfoLabels.firstName}
          type="text"
          inputPlaceholder={GeneralLabels.placeholder}
        ></LabeledInput>
        <LabeledInput
          labelText={CustomerInfoLabels.lastName}
          type="text"
          inputPlaceholder={GeneralLabels.placeholder}
        ></LabeledInput>
      </div>
      <div>
        <LabeledInput
          labelText={CustomerInfoLabels.age}
          type="date"
          inputPlaceholder={GeneralLabels.placeholder}
        ></LabeledInput>
        <LabeledInput
          labelText={CustomerInfoLabels.driversLicensNo}
          type="text"
          inputPlaceholder={GeneralLabels.placeholder}
        ></LabeledInput>
      </div>
      <div>
        <LabeledInput
          labelText={CustomerInfoLabels.address}
          type="text"
          inputPlaceholder={GeneralLabels.placeholder}
        ></LabeledInput>
        <LabeledInput
          labelText={CustomerInfoLabels.phoneNo}
          type="tel"
          inputPlaceholder={GeneralLabels.placeholder}
        ></LabeledInput>
      </div>
      <div>
        <LabeledInput
          labelText={CustomerInfoLabels.email}
          type="email"
          inputPlaceholder={GeneralLabels.placeholder}
        ></LabeledInput>
      </div>
    </div>
  );
};

export default CustomerInfo;

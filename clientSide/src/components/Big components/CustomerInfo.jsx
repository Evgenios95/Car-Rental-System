import "./CustomerInfo.css";
import InputComponent from "../Input/input";
import {
  CustomerInfoLabels,
  GeneralLabels,
} from "../../text-labels/text-labels";

const CustomerInfo = () => {
  return (
    <div className="customer-info-container">
      {/* <p>{CustomerInfoLabels.title}</p> */}
      <div>
        <InputComponent
          labelText={CustomerInfoLabels.firstName}
          type="text"
          inputPlaceholder={GeneralLabels.placeholder}
        ></InputComponent>
        <InputComponent
          labelText={CustomerInfoLabels.lastName}
          type="text"
          inputPlaceholder={GeneralLabels.placeholder}
        ></InputComponent>
      </div>
      <div>
        <InputComponent
          labelText={CustomerInfoLabels.age}
          type="date"
          inputPlaceholder={GeneralLabels.placeholder}
        ></InputComponent>
        <InputComponent
          labelText={CustomerInfoLabels.driversLicensNo}
          type="text"
          inputPlaceholder={GeneralLabels.placeholder}
        ></InputComponent>
      </div>
      <div>
        <InputComponent
          labelText={CustomerInfoLabels.address}
          type="text"
          inputPlaceholder={GeneralLabels.placeholder}
        ></InputComponent>
        <InputComponent
          labelText={CustomerInfoLabels.phoneNo}
          type="tel"
          inputPlaceholder={GeneralLabels.placeholder}
        ></InputComponent>
      </div>
      <div>
        <InputComponent
          labelText={CustomerInfoLabels.email}
          type="email"
          inputPlaceholder={GeneralLabels.placeholder}
        ></InputComponent>
      </div>
    </div>
  );
};

export default CustomerInfo;

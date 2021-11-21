import "./CustomerInfo.css";
import { CustomerInfoLabels, GeneralText } from "../../text/text";
import InputComponent from "../Input/input";

const CustomerInfo = () => {
  return (
    <div className="customer-info-container">
      {/* <p>{CustomerInfoLabels.title}</p> */}
      <div>
        <InputComponent
          labelText={CustomerInfoLabels.firstName}
          type="text"
          inputPlaceholder={GeneralText.placeHText}
        ></InputComponent>
        <InputComponent
          labelText={CustomerInfoLabels.lastName}
          type="text"
          inputPlaceholder={GeneralText.placeHText}
        ></InputComponent>
      </div>
      <div>
        <InputComponent
          labelText={CustomerInfoLabels.age}
          type="date"
          inputPlaceholder={GeneralText.placeHText}
        ></InputComponent>
        <InputComponent
          labelText={CustomerInfoLabels.driversLicensNr}
          type="text"
          inputPlaceholder={GeneralText.placeHText}
        ></InputComponent>
      </div>
      <div>
        <InputComponent
          labelText={CustomerInfoLabels.address}
          type="text"
          inputPlaceholder={GeneralText.placeHText}
        ></InputComponent>
        <InputComponent
          labelText={CustomerInfoLabels.phoneNumber}
          type="tel"
          inputPlaceholder={GeneralText.placeHText}
        ></InputComponent>
      </div>
      <div>
        <InputComponent
          labelText={CustomerInfoLabels.email}
          type="email"
          inputPlaceholder={GeneralText.placeHText}
        ></InputComponent>
      </div>
    </div>
  );
};

export default CustomerInfo;

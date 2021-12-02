import "./CustomerInfo.css";
import {
  CustomerInfoLabels,
  GeneralText,
  SubtitlesText,
} from "../../text/text";
import InputComponent from "../Input/input";
import Subtitles from "../Subtitles/Subtitles";

const CustomerInfo = () => {
  return (
    <>
      <Subtitles stitle={SubtitlesText.customerInfo} />
      <div className="customer-info-container">
        <div className="customer-info-input-wrapper">
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
        <div style={{ display: "flex", flexDirection: "row" }}>
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
    </>
  );
};

export default CustomerInfo;

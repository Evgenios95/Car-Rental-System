import "./BookingComponent.css";
import {
  CustomerInfoLabels,
  GeneralLabels,
  SubtitleLabels,
} from "../../text-labels/text-labels";
import Subtitle from "../Subtitle/Subtitle";
import LabeledInput from "../LabeledInput/LabeledInput";

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
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                firstName: target.value,
              }))
            }
          ></LabeledInput>
          <LabeledInput
            labelText={CustomerInfoLabels.lastName}
            type="text"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                lastName: target.value,
              }))
            }
          ></LabeledInput>
        </div>
        <div>
          <LabeledInput
            labelText={CustomerInfoLabels.age}
            type="number"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={({ target }) => {
              setFormData((c) => ({
                ...c,
                age: parseInt(target.value),
              }));
            }}
          ></LabeledInput>
          {/* <div>
          <LabeledInput
            labelText={CustomerInfoLabels.age}
            type="date"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                date: new Date(target.value).toISOString(),
              }))
            }
          ></LabeledInput> */}
          <LabeledInput
            labelText={CustomerInfoLabels.driversLicensNo}
            type="text"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                driversLicenseNo: parseInt(target.value),
              }))
            }
          ></LabeledInput>
        </div>
        <div>
          <LabeledInput
            labelText={CustomerInfoLabels.address}
            type="text"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                address: target.value,
              }))
            }
          ></LabeledInput>
          <LabeledInput
            labelText={CustomerInfoLabels.phoneNo}
            type="tel"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                phoneNo: parseInt(target.value),
              }))
            }
          ></LabeledInput>
        </div>
        <div>
          <LabeledInput
            labelText={CustomerInfoLabels.email}
            type="email"
            inputPlaceholder={GeneralLabels.placeholder}
            onChange={({ target }) =>
              setFormData((c) => ({
                ...c,
                email: target.value,
              }))
            }
          ></LabeledInput>
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;

import { useNavigate, useParams, Link } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import GrayColumn from "../UiComponents/GrayColumn";
import GrayContainer from "../UiComponents/GrayContainer";
import LabeledInput from "../LabeledInput/LabeledInput";
import { onChangeIntHandler } from "../../functions/onChangeHandlers";
import { useState } from "react";
import {
  CustomerInfoLabels,
  GeneralLabels,
} from "../../text-labels/text-labels";
import Button from "../Button/Button";
import PageTitle from "../PageTitle/PageTitle";
import { onChangeHandler } from "../../functions/onChangeHandlers";
import "./EditCustomer.css";
import { updateCustomer } from "../../parse-functions/updateFunctions";

const EditCustomer = () => {
  const { bookingId, customerId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState();

  return (
    <>
      <NavBar />
      <PageTitle ptitle="Edit customer"></PageTitle>
      <form
        onSubmit={(e) =>
          updateCustomer(e, customerId, bookingId, formData, navigate)
        }
      >
        <GrayContainer>
          <GrayColumn>
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

            <LabeledInput
              labelText={CustomerInfoLabels.age}
              type="number"
              inputPlaceholder={GeneralLabels.placeholder}
              onChange={(e) => onChangeIntHandler(e, "age", setFormData)}
            ></LabeledInput>
            <LabeledInput
              labelText={CustomerInfoLabels.driversLicensNo}
              type="text"
              inputPlaceholder={GeneralLabels.placeholder}
              onChange={(e) =>
                onChangeIntHandler(e, "driversLicenseNo", setFormData)
              }
            ></LabeledInput>
            <LabeledInput
              labelText={CustomerInfoLabels.address}
              type="text"
              inputPlaceholder={GeneralLabels.placeholder}
              onChange={(e) => onChangeHandler(e, "address", setFormData)}
            ></LabeledInput>
            <LabeledInput
              labelText={CustomerInfoLabels.phoneNo}
              type="tel"
              inputPlaceholder={GeneralLabels.placeholder}
              onChange={(e) => onChangeIntHandler(e, "phoneNo", setFormData)}
            ></LabeledInput>
            <LabeledInput
              labelText={CustomerInfoLabels.email}
              type="email"
              inputPlaceholder={GeneralLabels.placeholder}
              onChange={(e) => onChangeHandler(e, "email", setFormData)}
            ></LabeledInput>
          </GrayColumn>
        </GrayContainer>
        <GrayContainer className="edit-customer-second-container">
          <Button
            btnText="Go back"
            onClick={() => navigate(`/individual-booking/${bookingId}`)}
          />
          <Button type="submit" btnText="Finish editing" />
        </GrayContainer>
      </form>
    </>
  );
};
export default EditCustomer;

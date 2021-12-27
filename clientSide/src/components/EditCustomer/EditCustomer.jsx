import { useNavigate, useParams, Link } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import GrayColumn from "../UiComponents/GrayColumn";
import GrayContainer from "../UiComponents/GrayContainer";
import LabeledInput from "../LabeledInput/LabeledInput";
import { onChangeIntHandler } from "../../functions/onChangeHandlers";
import { useState } from "react";
import { ColumnLabels } from "../../text-labels/parse-labels";
import {
  CustomerInfoLabels,
  GeneralLabels,
} from "../../text-labels/text-labels";
import Button from "../Button/Button";
import PageTitle from "../PageTitle/PageTitle";
import { onChangeHandler } from "../../functions/onChangeHandlers";
import Parse from "parse";
import "./EditCustomer.css";

const EditCustomer = () => {
  const { bookingId, customerId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  console.log(customerId);
  const updateCustomer = async (e, customerId, formData, navigate) => {
    e.preventDefault();

    const Customer = Parse.Object.extend("Customer");
    const query = new Parse.Query(Customer);
    const object = await query.get(customerId);
    object.set("lastName", formData.lastName);
    object.set("driversLicenseID", formData.driversLicenseNo);
    object.set("phoneNumber", formData.phoneNumber);
    object.set("firstName", formData.firstName);
    object.set("email", formData.email);
    object.set("age", formData.age);
    object.set("address", formData.address);
    try {
      const response = await object.save();
      console.log("Customer updated", response);
      navigate(`/individualBooking/${bookingId}`);
    } catch (error) {
      console.error("Error while updating Customer", error);
    }
  };
  console.log(formData);
  return (
    <>
      <NavBar />

      <PageTitle ptitle="Edit customer"></PageTitle>
      <form onSubmit={(e) => updateCustomer(e, customerId, formData, navigate)}>
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
            onClick={() => navigate(`/individualBooking/${bookingId}`)}
          />
          <Button type="submit" btnText="Finish editing" />
        </GrayContainer>
      </form>
    </>
  );
};
export default EditCustomer;

import { useNavigate, useParams } from "react-router-dom";
import "./EditBooking.css";
import GrayContainer from "../../UiComponents/GrayContainer";
import GrayColumn from "../../UiComponents/GrayColumn";
import LabeledInput from "../../LabeledInput/LabeledInput";
import { useState } from "react";
import { onChangeHandler } from "../../../functions/onChangeHandlers";
import DropDown from "../../DropDown/DropDown";
import Button from "../../Button/Button";
import NavBar from "../../NavBar/Navbar";
import PageTitle from "../../PageTitle/PageTitle";
import { updateBooking } from "../../../parse-functions/updateFunctions";
import { TitleLabels } from "../../../text-labels/text-labels";

const EditBooking = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);

  return (
    <>
      <NavBar />
      <PageTitle ptitle={TitleLabels.editBooking}></PageTitle>
      <form onSubmit={(e) => updateBooking(e, bookingId, formData, navigate)}>
        <GrayContainer>
          <GrayColumn>
            <LabeledInput
              labelText={"Pick-up date*"}
              type="date"
              onChange={(e) => onChangeHandler(e, "pickUpDate", setFormData)}
            ></LabeledInput>{" "}
            <LabeledInput
              labelText={"Pick-up time*"}
              type="time"
              onChange={(e) => onChangeHandler(e, "pickUpTime", setFormData)}
            ></LabeledInput>
            <LabeledInput
              labelText={"Return date*"}
              type="date"
              onChange={(e) => onChangeHandler(e, "returnDate", setFormData)}
            ></LabeledInput>
            <LabeledInput
              labelText={"Return time*"}
              type="time"
              onChange={(e) => onChangeHandler(e, "returnTime", setFormData)}
            ></LabeledInput>
            <DropDown
              type="CarGroup"
              labeltext="Car Group*"
              attribute="name"
              onChange={(e) => onChangeHandler(e, "carGroup", setFormData)}
            />
            <DropDown
              type="RentalOffice"
              labeltext="Pick up office*"
              attribute="officeNumber"
              onChange={(e) => onChangeHandler(e, "pickUpOffice", setFormData)}
            />
            <DropDown
              type="RentalOffice"
              labeltext="Return office*"
              onChange={(e) => onChangeHandler(e, "returnOffice", setFormData)}
              attribute="officeNumber"
            />
            <DropDown
              type="Bookingstate"
              labeltext="Booking state*"
              onChange={(e) => onChangeHandler(e, "bookingState", setFormData)}
              attribute="state"
            />
          </GrayColumn>
        </GrayContainer>
        <GrayContainer className="edit-booking-second-container">
          <Button
            btnText="Go back"
            className="btn--white"
            onClick={() => navigate(`/individual-booking/${bookingId}`)}
          />

          <Button type="submit" btnText="Finish editing" />
        </GrayContainer>
      </form>
    </>
  );
};
export default EditBooking;

import { useNavigate, useParams } from "react-router-dom";
import "./EditBookingPage.css";
import GrayContainer from "../../../components/Layout/GrayContainer";
import GrayColumn from "../../../components/Layout/GrayColumn";
import LabeledInput from "../../../components/LabeledInput/LabeledInput";
import { useState } from "react";
import DropDown from "../../../components/DropDown/DropDown";
import NavBar from "../../../components/NavBar/Navbar";
import PageTitle from "../../../components/PageTitle/PageTitle";
import { updateBooking } from "../../../utils/parse-functions/updateFunctions";
import { TitleLabels } from "../../../utils/constants/general-labels";
import { onChangeHandler } from "../../../utils/functions/onChangeHandlers";
import PopUpButton from "../../../components/PopUpButton/PopUpButton";

const EditBookingPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);

  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.editBooking} />
      <form
        onSubmit={(e) => updateBooking(e, bookingId, formData, navigate)}
        id="edit-booking"
      >
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
          <PopUpButton
            popupQuestion="Is the information correct? Finish editing?"
            popupBtnText="Finish Editing"
            btnClassName="btn--primary"
            confirmBtnText="Yes"
            rejectBtnText="No"
            confirmBtnType="submit"
            form="edit-booking"
          />

          <PopUpButton
            popupQuestion="Your current changes will be lost."
            popupBtnText="Go back"
            className="btn--white"
            confirmBtnText="Go back"
            rejectBtnText="Keep editing"
            onConfirmClick={() => navigate(`/individual-booking/${bookingId}`)}
          />
        </GrayContainer>
      </form>
    </>
  );
};
export default EditBookingPage;

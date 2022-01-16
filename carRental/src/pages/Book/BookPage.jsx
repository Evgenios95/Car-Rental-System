import "./BookPage.css";
import GrayContainer from "../../components/Layout/GrayContainer";
import Button from "../../components/Button/Button";
import PickUpCar from "./PickUpCar";
import CustomerInfo from "./CustomerInfo";
import ReturnCar from "./ReturnCar";
import NavBar from "../../components/NavBar/Navbar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PopUpButton from "../../components/PopUpButton/PopUpButton";
import { reloadWindow } from "../../utils/functions/popupFunctions";
import GrayColumn from "../../components/Layout/GrayColumn";
import { createBooking } from "../../utils/parse-functions/bookingComponentFunctions";

const BookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState([]);

  return (
    <>
      <NavBar />

      <form
        onSubmit={(e) => createBooking(e, formData, navigate)}
        id="booking_form"
      >
        <GrayContainer>
          <div className="booking-first-column">
            <GrayColumn>
              <PickUpCar setFormData={setFormData} />
            </GrayColumn>
          </div>

          <div className="booking-second-column">
            <GrayColumn>
              <ReturnCar setFormData={setFormData} />
            </GrayColumn>
          </div>

          <div className="booking-third-column">
            <GrayColumn>
              <CustomerInfo setFormData={setFormData} />
            </GrayColumn>
          </div>
        </GrayContainer>

        <GrayContainer className="booking-second-container">
          <Button type="submit" btnText="Create booking" />
          <PopUpButton
            popupQuestionText="Are the information correct? Continue with creation of the booking?"
            popupButtonText="Book"
            confirmChoiceButtonText="Yes"
            rejectChoiceButtonText="No"
            popupButtonType="submit"
            form="booking_form"
          />
          {location.pathname === "/book" ? (
            <Button
              btnText="Walk in"
              className="btn--primary"
              onClick={() => navigate("/walkin-book")}
            />
          ) : (
            <Button
              btnText="Phone booking"
              className="btn--primary"
              onClick={() => navigate("/book")}
            />
          )}
          <PopUpButton
            popupQuestionText="Are you sure you would like to cancel your changes?"
            popupButtonText="Cancel"
            confirmChoiceButtonText="Yes"
            rejectChoiceButtonText="No"
            onConfirmClick={reloadWindow}
          />
        </GrayContainer>
      </form>
    </>
  );
};

export default BookPage;

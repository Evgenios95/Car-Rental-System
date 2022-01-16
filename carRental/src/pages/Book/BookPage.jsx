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
import GrayColumn from "../../components/Layout/GrayColumn";
import { createBooking } from "../../utils/parse-functions/bookingComponentFunctions";

const BookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState([]);

  return (
    <>
      <NavBar />

      <form onSubmit={(e) => createBooking(e, formData, navigate)}>
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
          <Button
            type="submit"
            className="btn--primary"
            btnText="Create booking"
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
            popupQuestionText="Are you sure you wouldn like to cancel your changes?"
            confirmChoiceButtonText="Yes"
            rejectChoiceButtonText="No"
          />
        </GrayContainer>
      </form>
    </>
  );
};

export default BookPage;
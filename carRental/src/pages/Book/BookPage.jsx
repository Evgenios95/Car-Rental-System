import "./BookPage.css";
import GrayContainer from "../../components/Layout/GrayContainer";
import Button from "../../components/Button/Button";
import PickUpCar from "./private/PickUpCar";
import ReturnCar from "./private/ReturnCar";
import NavBar from "../../components/NavBar/Navbar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PopUpButton from "../../components/PopUpButton/PopUpButton";
import GrayColumn from "../../components/Layout/GrayColumn";
import { createBooking } from "../../utils/parse-functions/bookingComponentFunctions";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TitleLabels } from "../../utils/constants/general-labels";
import CustomerInfo from "./private/CustomerInfo";

const BookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState([]);

  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.book} />
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
          <PopUpButton
            popupQuestion="Is the information correct? Create booking?"
            popupBtnText="Book"
            confirmBtnText="Yes"
            rejectBtnText="No"
            confirmBtnType="submit"
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
            popupQuestion="Are you sure you would like to cancel your changes?"
            popupBtnText="Cancel"
            confirmBtnText="Yes"
            rejectBtnText="No"
            onConfirmClick={() => window.location.reload(false)}
          />
        </GrayContainer>
      </form>
    </>
  );
};

export default BookPage;

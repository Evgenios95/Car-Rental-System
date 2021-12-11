import "./BookingComponent.css";
import GrayColumn from "../UiComponents/GrayColumn";
import GrayContainer from "../UiComponents/GrayContainer";
import Button from "../Button/Button";
import PickUpCar from "./PickUpCar";
import CustomerInfo from "./CustomerInfo";
import ReturnCar from "./ReturnCar";
import NavBar from "../NavBar/Navbar";
import { useState } from "react";
import { createBooking } from "../../parse-functions/bookingComponentFunctions";

const BookingComponent = () => {
  const [formData, setFormData] = useState([]);

  return (
    <>
      <NavBar />

      <form onSubmit={(e) => createBooking(e, formData)}>
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
          <Button type="submit" btnText="Submit" />
          {/* <Button type="submit" btnText="Cancel" /> */}
        </GrayContainer>
      </form>
    </>
  );
};

export default BookingComponent;

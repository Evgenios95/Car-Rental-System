import "./BookingComponent.css";
import CRColumn from "../UiComponents/CRColumn";
import CRContainer from "../UiComponents/CRContainer";
import Button from "../Button/Button";
import PickUpCarComponent from "./PickUpCar";
import CustomerInfo from "./CustomerInfo";
import ReturnCarComponent from "./ReturnCar";
import React, { useState } from "react";
import NavBar from "../NavBar/Navbar";
import { createBooking } from "../../parse-functions/parseFunctions";

const BookingComponent = () => {
  const [formData, setFormData] = useState([]);
  return (
    <div>
      <NavBar />
      <form onSubmit={(e) => createBooking(e, formData)}>
        <CRContainer>
          <div style={{ flex: "1 1 auto" }}>
            <CRColumn>
              <PickUpCarComponent setFormData={setFormData} />
            </CRColumn>
          </div>
          <div style={{ flex: "1 1 auto" }}>
            <CRColumn>
              <ReturnCarComponent setFormData={setFormData} />
            </CRColumn>
          </div>
          <div style={{ flex: "2 1 auto" }}>
            <CRColumn>
              <CustomerInfo setFormData={setFormData} />
            </CRColumn>
          </div>
        </CRContainer>
        <CRContainer myId="id1">
          <Button type="submit" btnText="hello there" />
          <Button type="submit" btnText="Cancel" />
        </CRContainer>
      </form>
    </div>
  );
};

export default BookingComponent;

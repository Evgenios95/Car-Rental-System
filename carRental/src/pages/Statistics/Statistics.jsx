import DropDown from "../../components/DropDown/DropDown";
import GrayColumn from "../../components/Layout/GrayColumn";
import GrayContainer from "../../components/Layout/GrayContainer";
import NavBar from "../../components/NavBar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  ClassnameLabels,
  ColumnLabels,
} from "../../utils/constants/parse-labels";
import { useState } from "react";
import { onChangeHandler } from "../../utils/functions/onChangeHandlers";

import Parse from "parse";
import {
  getOfficePointer,
  getBookingStatePointerForEdit,
} from "../../utils/parse-functions/pointerFunctions";
import Button from "../../components/Button/Button";
import "./Statistics.css";
import { useNavigate } from "react-router-dom";
import Subtitle from "../../components/Subtitle/Subtitle";

const Statistics = () => {
  const [formData, setFormData] = useState([]);
  const [numberOfBookings, setNumberOfBookings] = useState([0]);
  const navigate = useNavigate();

  const getBookingsWithState = async () => {
    const office = await getOfficePointer(formData.rentalOffice);
    const bookingState = await getBookingStatePointerForEdit(
      formData.bookingState
    );
    const params = {
      rentalOffice: office,
      bookingState: bookingState,
    };
    try {
      const fetchBookings = await Parse.Cloud.run("bookings", params);
      setNumberOfBookings(fetchBookings);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <PageTitle ptitle="Statistics"></PageTitle>
      <GrayContainer>
        <Subtitle stitle="Get number of bookings in different booking states" />
        <GrayColumn>
          <DropDown
            labeltext="Rental office*"
            type={ClassnameLabels.rentalOffice}
            attribute={ColumnLabels.rentalOffice.officeNo}
            onChange={(e) => onChangeHandler(e, "rentalOffice", setFormData)}
          ></DropDown>

          <DropDown
            labeltext="Booking state*"
            type={ClassnameLabels.bookingState}
            attribute={ColumnLabels.bookingState.state}
            onChange={(e) => onChangeHandler(e, "bookingState", setFormData)}
          ></DropDown>
          <p id="numberOfBookings">Number of bookings: {numberOfBookings}</p>
          <Button
            btnText="Get bookings"
            className="btn--primary"
            onClick={() => getBookingsWithState()}
          ></Button>
        </GrayColumn>
        <div className="back-button-statistics">
          <Button
            btnText="Go back"
            className="btn--primary"
            onClick={() => navigate("/booking-overview")}
          ></Button>
        </div>
      </GrayContainer>
    </>
  );
};

export default Statistics;

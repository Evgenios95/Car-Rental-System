import DropDown from "../../components/DropDown/DropDown";
import GrayColumn from "../../components/Layout/GrayColumn";
import GrayContainer from "../../components/Layout/GrayContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import {
  ClassnameLabels,
  ColumnLabels,
} from "../../utils/constants/parse-labels";
import { useState } from "react";
import { onChangeHandler } from "../../utils/functions/onChangeHandlers";
import { getBookingsWithState } from "../../utils/parse-functions/cloudFunctions";
import Button from "../../components/Button/Button";
import "./BookingStatisticsPage.css";

import Subtitle from "../../components/Subtitle/Subtitle";
import NavBar from "../../components/NavBar/Navbar";

const BookingStatistics = () => {
  const [formData, setFormData] = useState([]);
  const [numberOfBookings, setNumberOfBookings] = useState([0]);

  return (
    <>
      <NavBar />
      <PageTitle ptitle="Booking Statistics"></PageTitle>
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
            onClick={() => getBookingsWithState(formData, setNumberOfBookings)}
          ></Button>
        </GrayColumn>
      </GrayContainer>
    </>
  );
};

export default BookingStatistics;

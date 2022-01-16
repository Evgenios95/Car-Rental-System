import DropDown from "../DropDown/DropDown";
import GrayColumn from "../Layout/GrayColumn";
import GrayContainer from "../Layout/GrayContainer";
import PageTitle from "../PageTitle/PageTitle";
import {
  ClassnameLabels,
  ColumnLabels,
} from "../../utils/constants/parse-labels";
import { useState } from "react";
import { onChangeHandler } from "../../utils/functions/onChangeHandlers";
import { getBookingsWithState } from "../../utils/parse-functions/cloudFunctions";
import Button from "../Button/Button";
import "./BookingStatistics.css";

import Subtitle from "../Subtitle/Subtitle";

const BookingStatistics = () => {
  const [formData, setFormData] = useState([]);
  const [numberOfBookings, setNumberOfBookings] = useState([0]);

  return (
    <>
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

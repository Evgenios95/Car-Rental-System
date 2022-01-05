import { useParams } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import GrayContainer from "../UiComponents/GrayContainer";
import GrayColumn from "../UiComponents/GrayColumn";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IndividualBooking.css";
import Button from "../Button/Button";
import PageTitle from "../PageTitle/PageTitle";
import { TitleLabels, SubtitleLabels } from "../../text-labels/text-labels";
import Subtitle from "../Subtitle/Subtitle";

import {
  getBookingById,
  getCarById,
  deleteBookingById,
} from "../../parse-functions/individualBookingFunctions";
import BookingRecord from "./BookingRecord";
import CustomerRecord from "./CustomerRecord";
import CarRecord from "./CarRecord";

const IndividualBooking = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState({});
  const [customer, setCustomer] = useState({});
  const [car, setCar] = useState({});

  useEffect(async () => {
    await getBookingById(bookingId, setBooking, setCustomer, setCar);
  }, []);

  return (
    <>
      <NavBar />
      <PageTitle ptitle={TitleLabels.individualBooking} />
      <GrayContainer>
        <GrayColumn>
          <div className="individual-booking-table">
            <Subtitle stitle={SubtitleLabels.bookingRecord} />
            <BookingRecord booking={booking} bookingId={bookingId} />
          </div>
          <div className="individual-booking-table">
            <Subtitle stitle={SubtitleLabels.customerRecord} />
            <CustomerRecord
              booking={booking}
              bookingId={bookingId}
              customer={customer}
            />
          </div>
          <div className="individual-booking-table">
            <Subtitle stitle={SubtitleLabels.carRecord} />
            <CarRecord booking={booking} bookingId={bookingId} car={car} />
          </div>
        </GrayColumn>
      </GrayContainer>

      <GrayContainer className="individual-booking-second-container">
        <Button
          className="btn--red"
          btnText="Delete booking"
          onClick={() => deleteBookingById(bookingId)}
        />

        <Button
          type="button"
          btnText="Pick up car"
          className="btn--primary"
          onClick={() => navigate(`/pick-up-car/${bookingId}/`)}
          // onClick={async () =>
          // await pickUpcar(car.carId.id, 0, "0", bookingId, navigate)
          // }
        />
        <Button
          btnText="Return car"
          className="btn--primary"
          onClick={() => navigate(`/return-car/${bookingId}/`)}
        />
        <Button
          btnText="Go back"
          className="btn--white"
          onClick={() => navigate(`/booking-overview/`)}
        />
      </GrayContainer>
    </>
  );
};
export default IndividualBooking;

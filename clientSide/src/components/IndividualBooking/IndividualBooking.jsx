import { useParams } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import GrayContainer from "../UiComponents/GrayContainer";
import GrayColumn from "../UiComponents/GrayColumn";
import { useState } from "react";
import Parse from "parse";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./IndividualBooking.css";
import Button from "../Button/Button";
import PageTitle from "../PageTitle/PageTitle";
import {
  TitleLabels,
  SubtitleLabels,
  NavigationLabels,
} from "../../text-labels/text-labels";
import Subtitle from "../Subtitle/Subtitle";
import { pickUpcar } from "../../parse-functions/pickUpFunctions";

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
          <Subtitle stitle={SubtitleLabels.bookingRecord} />
          <BookingRecord booking={booking} bookingId={bookingId} />
        </GrayColumn>
        <GrayColumn>
          <Subtitle stitle={SubtitleLabels.customerRecord} />
          <CustomerRecord
            booking={booking}
            bookingId={bookingId}
            customer={customer}
          />
        </GrayColumn>
        <GrayColumn>
          <Subtitle stitle={SubtitleLabels.carRecord} />
          <CarRecord booking={booking} bookingId={bookingId} car={car} />
        </GrayColumn>
      </GrayContainer>

      <GrayContainer className="individual-booking-second-container">
        <Button
          type="button"
          btnText="Delete booking"
          btnBgColor="var(--global-red-55)"
          onClick={() => deleteBookingById(bookingId)}
        />

        <Button
          type="button"
          btnText="Pick up car"
          onClick={async () =>
            await pickUpcar(car.carId.id, 0, "0", bookingId, navigate)
          }
        />
        <Button
          type="button"
          btnText="Return car"
          onClick={() => navigate(`/return-car/${bookingId}/`)}
        />
        <Button btnText="Go back" onClick={() => navigate(`/find-booking/`)} />
      </GrayContainer>
    </>
  );
};
export default IndividualBooking;

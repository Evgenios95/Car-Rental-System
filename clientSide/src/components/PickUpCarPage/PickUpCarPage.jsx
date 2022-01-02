import NavBar from "../NavBar/Navbar";
import GrayContainer from "../UiComponents/GrayContainer";
import PageTitle from "../PageTitle/PageTitle";
import GrayColumn from "../UiComponents/GrayColumn";
import Subtitle from "../Subtitle/Subtitle";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBookingById } from "../../parse-functions/individualBookingFunctions";
import BookingRecord from "../IndividualBooking/BookingRecord";
import CustomerRecord from "../IndividualBooking/CustomerRecord";
import CarRecord from "../IndividualBooking/CarRecord";
import { SubtitleLabels } from "../../text-labels/text-labels";
import LabeledInput from "../LabeledInput/LabeledInput";
import {
  onChangeCheckBoxHandler,
  onChangeIntHandler,
} from "../../functions/onChangeHandlers";
import Button from "../Button/Button";
import "./PickUpCarPage.css";

const PickUpCarPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [pickUpData, setPickUpData] = useState({ tankFull: "no" });
  const [booking, setBooking] = useState({});
  const [customer, setCustomer] = useState({});
  const [car, setCar] = useState({});

  useEffect(async () => {
    await getBookingById(bookingId, setBooking, setCustomer, setCar);
  }, []);

  return (
    <>
      <NavBar />
      <PageTitle ptitle="Pick up car"></PageTitle>
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
      <GrayContainer className="pick-up-car-secon-container">
        <Subtitle stitle="Pick up settings"></Subtitle>
        <GrayColumn>
          <LabeledInput
            labelText="Tank full?"
            type="checkbox"
            onChange={(e) =>
              onChangeCheckBoxHandler(e, "tankFull", setPickUpData)
            }
          ></LabeledInput>
          <LabeledInput
            labelText="Mileage"
            type="number"
            onChange={(e) => onChangeIntHandler(e, "mileage", setPickUpData)}
          ></LabeledInput>
        </GrayColumn>
      </GrayContainer>
      <GrayContainer className="pick-up-car-third-container">
        <Button type="button" btnText="Pick up car" />

        <Button
          btnText="Go back"
          onClick={() => navigate(`/individual-booking/${bookingId}`)}
        />
      </GrayContainer>
    </>
  );
};
export default PickUpCarPage;

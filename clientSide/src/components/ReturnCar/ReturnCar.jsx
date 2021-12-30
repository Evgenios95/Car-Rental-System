import { useState } from "react";
import DropDown from "../DropDown/DropDown";
import NavBar from "../NavBar/Navbar";
import Subtitle from "../Subtitle/Subtitle";
import { SubtitleLabels } from "../../text-labels/text-labels";
import PageTitle from "../PageTitle/PageTitle";
import GrayColumn from "../UiComponents/GrayColumn";
import GrayContainer from "../UiComponents/GrayContainer";
import {
  onChangeHandler,
  onChangeIntHandler,
} from "../../functions/onChangeHandlers";
import DropDownParkingSlots from "../DropDownParkingSlots/DropDownParkingSlots";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getBookingById } from "../../parse-functions/individualBookingFunctions";
import BookingRecord from "../IndividualBooking/BookingRecord";
import CustomerRecord from "../IndividualBooking/CustomerRecord";
import CarRecord from "../IndividualBooking/CarRecord";
import Button from "../Button/Button";
import { returnCar } from "../../parse-functions/returnFunctions";

const ReturnCar = () => {
  const { bookingId, customerId, carId } = useParams();
  const navigate = useNavigate();
  const [returnData, setReturnData] = useState([]);
  const [booking, setBooking] = useState({});
  const [customer, setCustomer] = useState({});
  const [car, setCar] = useState({});
  useEffect(async () => {
    await getBookingById(bookingId, setBooking, setCustomer, setCar);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <PageTitle ptitle="Return car"></PageTitle>
      <GrayContainer>
        <GrayColumn>
          {" "}
          <Subtitle stitle={SubtitleLabels.bookingRecord} />
          <BookingRecord booking={booking} bookingId={bookingId} />
        </GrayColumn>
        <GrayColumn>
          {" "}
          <Subtitle stitle={SubtitleLabels.customerRecord} />{" "}
          <CustomerRecord
            booking={booking}
            bookingId={bookingId}
            customer={customer}
          />
        </GrayColumn>
        <GrayColumn>
          {" "}
          <Subtitle stitle={SubtitleLabels.carRecord} />
          <CarRecord booking={booking} bookingId={bookingId} car={car} />
        </GrayColumn>
      </GrayContainer>
      <GrayContainer>
        <Subtitle stitle="Return settings"></Subtitle>
        <GrayColumn>
          <DropDown
            type="CarState"
            labeltext="Car state*"
            attribute="state"
            onChange={(e) => onChangeHandler(e, "carState", setReturnData)}
          />
          <DropDown
            type="RentalOffice"
            labeltext="Return office*"
            attribute="officeNumber"
            onChange={(e) => onChangeHandler(e, "officeNumber", setReturnData)}
          />
          <DropDownParkingSlots
            type="ParkingSlot"
            labeltext="Available parking slots*"
            attribute="availableParkingSlots"
            onChange={(e) =>
              onChangeIntHandler(e, "parkingSlot", setReturnData)
            }
            returnData={returnData}
          />
        </GrayColumn>
      </GrayContainer>
      <GrayContainer className="individual-booking-second-container">
        <Button
          type="button"
          btnText="Return car"
          onClick={async () =>
            await returnCar(
              bookingId,
              booking.carId,
              returnData.carState,
              parseInt(returnData.parkingSlot),
              returnData.officeNumber,
              navigate
            )
          }
        />
      </GrayContainer>
    </>
  );
};
export default ReturnCar;

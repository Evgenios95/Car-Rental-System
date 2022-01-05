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
import Checkbox from "../CheckBox/CheckBox";
import {
  onChangeCheckBoxHandler,
  onChangeIntHandler,
} from "../../functions/onChangeHandlers";
import Button from "../Button/Button";
import "./PickUpCarPage.css";
import { pickUpcar } from "../../parse-functions/pickUpFunctions";

const PickUpCarPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState({});
  const [customer, setCustomer] = useState({});
  const [car, setCar] = useState({});
  const [pickUpData, setPickUpData] = useState({
    tankFull: "no",
  });

  useEffect(async () => {
    await getBookingById(bookingId, setBooking, setCustomer, setCar);
  }, []);

  return (
    <>
      <NavBar />
      <PageTitle ptitle="Pick up car"></PageTitle>
      <form
        onSubmit={(e) =>
          pickUpcar(
            e,
            car.carId.id,
            parseInt(car.parkingSlot),
            car.rentalOffice,
            parseInt(pickUpData.mileage),
            pickUpData.tankFull,
            bookingId,
            navigate
          )
        }
      >
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

        <GrayContainer>
          <Subtitle stitle="Pick up settings"></Subtitle>
          <GrayColumn>
            <Checkbox
              label="Tank full?"
              onCheckboxChange={(e) =>
                onChangeCheckBoxHandler(e, "tankFull", setPickUpData)
              }
            ></Checkbox>
            <LabeledInput
              labelText="Mileage"
              type="number"
              onChange={(e) => onChangeIntHandler(e, "mileage", setPickUpData)}
            ></LabeledInput>
          </GrayColumn>
        </GrayContainer>

        <GrayContainer className="pick-up-car-third-container">
          <Button
            type="submit"
            className="btn--primary"
            btnText="Pick up car"
          />

          <Button
            btnText="Go back"
            className="btn--white"
            onClick={() => navigate(`/individual-booking/${bookingId}`)}
          />
        </GrayContainer>
      </form>
    </>
  );
};
export default PickUpCarPage;

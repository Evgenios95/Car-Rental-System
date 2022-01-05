import NavBar from "../../components/NavBar/Navbar";
import GrayContainer from "../../components/Layout/GrayContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import GrayColumn from "../../components/Layout/GrayColumn";
import Subtitle from "../../components/Subtitle/Subtitle";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBookingById } from "../../utils/parse-functions/individualBookingFunctions";
IndividualCarRecord;
import { SubtitleLabels } from "../../utils/constants/general-labels";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import Checkbox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import "./PickUpCarPage.css";
import { pickUpcar } from "../../utils/parse-functions/pickUpFunctions";
import {
  onChangeCheckBoxHandler,
  onChangeIntHandler,
} from "../../utils/functions/onChangeHandlers";
import IndividualBookingRecord from "../IndividualBooking/IndividualBookingRecord";
import IndividualCarRecord from "../IndividualBooking/IndividualCarRecord";
import IndividualCustomerRecord from "../IndividualBooking/IndividualCustomerRecord";

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
            <IndividualBookingRecord booking={booking} bookingId={bookingId} />
          </GrayColumn>
          <GrayColumn>
            <Subtitle stitle={SubtitleLabels.customerRecord} />
            <IndividualCustomerRecord
              booking={booking}
              bookingId={bookingId}
              customer={customer}
            />
          </GrayColumn>
          <GrayColumn>
            <Subtitle stitle={SubtitleLabels.carRecord} />
            <IndividualCarRecord
              booking={booking}
              bookingId={bookingId}
              car={car}
            />
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

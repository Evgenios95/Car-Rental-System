import NavBar from "../../components/NavBar/Navbar";
import GrayContainer from "../../components/Layout/GrayContainer";
import PageTitle from "../../components/PageTitle/PageTitle";
import GrayColumn from "../../components/Layout/GrayColumn";
import Subtitle from "../../components/Subtitle/Subtitle";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getBookingById } from "../../utils/parse-functions/individualBookingFunctions";
IndividualCarRecord;
import {
  SubtitleLabels,
  TitleLabels,
} from "../../utils/constants/general-labels";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import Checkbox from "../../components/CheckBox/CheckBox";
import "./PickUpCarPage.css";
import { pickUpcar } from "../../utils/parse-functions/pickUpFunctions";
import {
  onChangeCheckBoxHandler,
  onChangeIntHandler,
} from "../../utils/functions/onChangeHandlers";
import IndividualCarRecord from "../../components/IndividualRecords/IndividualCarRecord";
import IndividualCustomerRecord from "../../components/IndividualRecords/IndividualCustomerRecord";
import IndividualBookingRecord from "../../components/IndividualRecords/IndividualBookingRecord";
import PopUpButton from "../../components/PopUpButton/PopUpButton";

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
      <PageTitle title={TitleLabels.pickUpCar} />
      <form
        id="pickup-car-form"
        onSubmit={(e) =>
          pickUpcar(
            e,
            car.carId.id,
            parseInt(car.parkingSlot),
            car.rentalOffice,
            parseInt(pickUpData.mileage),
            pickUpData.tankFull,
            bookingId,
            navigate,
            car.mileage
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
          <GrayColumn>
            <Subtitle stitle="Pick up settings"></Subtitle>
            <div className="column-pick-up-settings">
              <LabeledInput
                labelText="Mileage"
                type="number"
                onChange={(e) =>
                  onChangeIntHandler(e, "mileage", setPickUpData)
                }
                className="mileage-input-pick-up"
              />
              <div className="tank-checkbox-pick-up">
                <Checkbox
                  label="Tank full?"
                  onCheckboxChange={(e) =>
                    onChangeCheckBoxHandler(e, "tankFull", setPickUpData)
                  }
                />
              </div>
            </div>
          </GrayColumn>
        </GrayContainer>

        <GrayContainer className="pick-up-car-third-container">
          <PopUpButton
            popupQuestion="Pick up the car?"
            popupBtnText="Pick up"
            confirmBtnText="Yes"
            rejectBtnText="No"
            form="pickup-car-form"
            confirmBtnType="submit"
            btnClassName="btn--primary"
          />

          <PopUpButton
            popupQuestion="Your current changes will be lost. Go back anyway?"
            popupBtnText="Go back"
            className="btn--white"
            confirmBtnText="Yes"
            rejectBtnText="No"
            onConfirmClick={() => navigate(`/individual-booking/${bookingId}`)}
          />
        </GrayContainer>
      </form>
    </>
  );
};
export default PickUpCarPage;

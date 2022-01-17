import { useState } from "react";
import DropDown from "../../components/DropDown/DropDown";
import NavBar from "../../components/NavBar/Navbar";
import Subtitle from "../../components/Subtitle/Subtitle";
import {
  SubtitleLabels,
  TitleLabels,
} from "../../utils/constants/general-labels";
import PageTitle from "../../components/PageTitle/PageTitle";
import GrayColumn from "../../components/Layout/GrayColumn";
import GrayContainer from "../../components/Layout/GrayContainer";
import DropDownParkingSlots from "../../components/DropDownParkingSlots/DropDownParkingSlots";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getBookingById } from "../../utils/parse-functions/individualBookingFunctions";
import IndividualCustomerRecord from "../IndividualBooking/IndividualCustomerRecord";
import Button from "../../components/Button/Button";
import { returnCar } from "../../utils/parse-functions/returnFunctions";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import "./ReturnCarPage.css";
import Checkbox from "../../components/CheckBox/CheckBox";
import {
  onChangeCheckBoxHandler,
  onChangeHandler,
  onChangeIntHandler,
} from "../../utils/functions/onChangeHandlers";
import IndividualBookingRecord from "../IndividualBooking/IndividualBookingRecord";
import IndividualCarRecord from "../IndividualBooking/IndividualCarRecord";
import PopUpButton from "../../components/PopUpButton/PopUpButton";

const ReturnCarPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [returnData, setReturnData] = useState({ tankFull: "no" });
  const [booking, setBooking] = useState({});
  const [customer, setCustomer] = useState({});
  const [car, setCar] = useState({});
  useEffect(async () => {
    await getBookingById(bookingId, setBooking, setCustomer, setCar);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <PageTitle title={TitleLabels.returnCar} />
      <GrayContainer>
        <GrayColumn>
          {" "}
          <Subtitle stitle={SubtitleLabels.bookingRecord} />
          <IndividualBookingRecord booking={booking} bookingId={bookingId} />
        </GrayColumn>
        <GrayColumn>
          {" "}
          <Subtitle stitle={SubtitleLabels.customerRecord} />{" "}
          <IndividualCustomerRecord
            booking={booking}
            bookingId={bookingId}
            customer={customer}
          />
        </GrayColumn>
        <GrayColumn>
          {" "}
          <Subtitle stitle={SubtitleLabels.carRecord} />
          <IndividualCarRecord
            booking={booking}
            bookingId={bookingId}
            car={car}
          />
        </GrayColumn>
      </GrayContainer>
      <form
        id="return-car-form"
        onSubmit={(e) =>
          returnCar(
            e,
            bookingId,
            booking.carId,
            returnData.carState,
            parseInt(returnData.parkingSlot),
            returnData.officeNumber,
            parseInt(returnData.mileage),
            returnData.tankFull,
            navigate
          )
        }
      >
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
              onChange={(e) =>
                onChangeHandler(e, "officeNumber", setReturnData)
              }
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

          <GrayColumn>
            <Checkbox
              label="Tank full?"
              onCheckboxChange={(e) =>
                onChangeCheckBoxHandler(e, "tankFull", setReturnData)
              }
            ></Checkbox>

            <LabeledInput
              labelText="Mileage"
              type="number"
              onChange={(e) => onChangeIntHandler(e, "mileage", setReturnData)}
            ></LabeledInput>
          </GrayColumn>
        </GrayContainer>
        <GrayContainer className="return-car-third-container">
          <PopUpButton
            popupQuestion="Return the car?"
            popupBtnText="Return"
            confirmBtnText="Yes"
            rejectBtnText="No"
            confirmBtnType="submit"
            btnClassName="btn--primary"
            form="return-car-form"
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
export default ReturnCarPage;

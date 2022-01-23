import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";
import GrayContainer from "../../components/Layout/GrayContainer";
import GrayColumn from "../../components/Layout/GrayColumn";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IndividualBookingPage.css";
import Button from "../../components/Button/Button";
import PageTitle from "../../components/PageTitle/PageTitle";
import Subtitle from "../../components/Subtitle/Subtitle";
import {
  getBookingById,
  deleteBookingByIdRest,
} from "../../utils/parse-functions/individualBookingFunctions";
import IndividualBookingRecord from "../../components/IndividualRecords/IndividualBookingRecord";
import IndividualCustomerRecord from "../../components/IndividualRecords/IndividualCustomerRecord";
import IndividualCarRecord from "../../components/IndividualRecords/IndividualCarRecord";
import {
  TitleLabels,
  SubtitleLabels,
} from "../../utils/constants/general-labels";
import PopUpButton from "../../components/PopUpButton/PopUpButton";

const IndividualBookingPage = () => {
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
      <PageTitle title={TitleLabels.individualBooking} />
      <GrayContainer>
        <GrayColumn>
          <div className="individual-booking-table">
            <Subtitle stitle={SubtitleLabels.bookingRecord} />
            <IndividualBookingRecord booking={booking} bookingId={bookingId} />
          </div>
          <div className="individual-booking-table">
            <Subtitle stitle={SubtitleLabels.customerRecord} />
            <IndividualCustomerRecord
              booking={booking}
              bookingId={bookingId}
              customer={customer}
            />
          </div>
          <div className="individual-booking-table">
            <Subtitle stitle={SubtitleLabels.carRecord} />
            <IndividualCarRecord
              booking={booking}
              bookingId={bookingId}
              car={car}
            />
          </div>
        </GrayColumn>
      </GrayContainer>

      <GrayContainer className="individual-booking-second-container">
        <PopUpButton
          popupQuestion="Delete this booking?"
          popupBtnText="Delete"
          confirmBtnText="Yes"
          rejectBtnText="No"
          btnClassName="btn--red"
          onConfirmClick={() => deleteBookingByIdRest(bookingId, navigate)}
        />

        <Button
          type="button"
          btnText="Pick up car"
          className="btn--primary"
          onClick={() => navigate(`/pick-up-car/${bookingId}/`)}
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
export default IndividualBookingPage;

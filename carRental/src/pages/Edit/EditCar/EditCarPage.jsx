import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../../components/NavBar/Navbar";
import GrayContainer from "../../../components/Layout/GrayContainer";
import GrayColumn from "../../../components/Layout/GrayColumn";
import { useState, useEffect } from "react";
import Subtitle from "../../../components/Subtitle/Subtitle";
import PageTitle from "../../../components/PageTitle/PageTitle";
import EditCarTable from "./EditCarTable";
import ChosenCarTable from "./ChosenCarTable";
import "./EditCarPage.css";
import { getCarById } from "../../../utils/parse-functions/individualBookingFunctions";
import {
  chooseCar,
  updateCarInBooking,
} from "../../../utils/parse-functions/updateFunctions";
import PopUpButton from "../../../components/PopUpButton/PopUpButton";
import { TitleLabels } from "../../../utils/constants/general-labels";

const EditCarPage = () => {
  const { bookingId, carId, rentalOffice } = useParams();
  const [chosenCar, setChosenCar] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(async () => {
    await getCarById(carId, setChosenCar);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.editBookingCar} />
      <GrayContainer>
        <GrayColumn>
          <Subtitle stitle="Chosen car"></Subtitle>
          <ChosenCarTable
            chosenCar={chosenCar}
            chooseCar={chooseCar}
            setChosenCar={setChosenCar}
          />
        </GrayColumn>
        <GrayColumn>
          <Subtitle stitle="Available cars"></Subtitle>
          <EditCarTable
            setChosenCar={setChosenCar}
            rentalOffice={rentalOffice}
          ></EditCarTable>
        </GrayColumn>
      </GrayContainer>

      <GrayContainer className="edit-car-second-container">
        <PopUpButton
          popupQuestion="Is the information correct? Finish editing?"
          popupBtnText="Finish Editing"
          btnClassName="btn--primary"
          confirmBtnText="Yes"
          rejectBtnText="No"
          onConfirmClick={() =>
            updateCarInBooking(bookingId, chosenCar.carId, navigate)
          }
        />

        <PopUpButton
          popupQuestion="Your current changes will be lost."
          popupBtnText="Go back"
          className="btn--white"
          confirmBtnText="Go back"
          rejectBtnText="Keep editing"
          onConfirmClick={() => navigate(`/individual-booking/${bookingId}`)}
        />
      </GrayContainer>
    </>
  );
};
export default EditCarPage;

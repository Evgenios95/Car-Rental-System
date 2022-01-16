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
import Button from "../../../components/Button/Button";

const EditCarPage = () => {
  const { bookingId, carId } = useParams();
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
      <PageTitle ptitle="Choose car for booking"></PageTitle>
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
          <EditCarTable setChosenCar={setChosenCar}></EditCarTable>
        </GrayColumn>
      </GrayContainer>

      <GrayContainer className="edit-car-second-container">
        <Button
          btnText="Finish editing"
          className="btn--primary"
          onClick={() =>
            updateCarInBooking(bookingId, chosenCar.carId, navigate)
          }
        />

        <Button
          btnText="Go back"
          onClick={() => navigate(`/individual-booking/${bookingId}`)}
        />
      </GrayContainer>
    </>
  );
};
export default EditCarPage;
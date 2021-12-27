import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import GrayContainer from "../UiComponents/GrayContainer";
import GrayColumn from "../UiComponents/GrayColumn";
import { useState, useEffect } from "react";
import { getCarById } from "../../parse-functions/individualBookingFunctions";
import Subtitle from "../Subtitle/Subtitle";
import PageTitle from "../PageTitle/PageTitle";
import Button from "../Button/Button";
import EditCarTable from "./EditCarTable";
import ChosenCarTable from "./ChosenCarTable";
import { updateCarInBooking } from "../../parse-functions/updateFunctions";
import { chooseCar } from "../../parse-functions/updateFunctions";
import "./EditCar.css";

const EditCar = () => {
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
export default EditCar;

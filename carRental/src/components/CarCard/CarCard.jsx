import "./CarCard.css";
import ford from "../../images/a6.jpeg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCarById } from "../../parse-functions/getCarByIdFunction";
import GrayContainer from "../UiComponents/GrayContainer";
import GrayColumn from "../UiComponents/GrayColumn";

export default function CarCard() {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    getCarById(id, setCar, setError);
  }, []);

  return (
    <GrayContainer>
      <GrayColumn>
        <div>It works: here is its model = {car.model}</div>
      </GrayColumn>
    </GrayContainer>
  );
}

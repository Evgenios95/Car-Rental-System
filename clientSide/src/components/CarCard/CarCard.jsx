import "./CarCard.css";
import ford from "../../images/a6.jpeg";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCarById } from "../../parse-functions/getCarByIdFunction";

export default function CarCard() {
  const { id } = useParams();
  const [error, setError] = useState();
  const [car, setCar] = useState();

  useEffect(async () => {
    await getCarById({ id }, setError, setCar);
  }, []);
  console.log(car);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title-group">
          <h5 className="card-title">{id}</h5>
        </div>
      </div>
      <img className="card-image" src={ford} alt=""></img>
      <div className="card-model">{car.model}</div>
      <div className="card-info">{car.licenseNumber}</div>
    </div>
  );
}

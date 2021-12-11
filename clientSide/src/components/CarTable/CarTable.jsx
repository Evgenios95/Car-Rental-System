import React, { useState, useEffect } from "react";
import "./CarTable.css";
import Parse from "parse";
import { setCarElements } from "../../parse-functions/carTableFunctions";

const CarTable = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    await setCarElements(setCars, setError);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  if (error || !Array.isArray(cars)) {
    return <p>There was an error loading your data!</p>;
  }
  return (
    <div className="overview-container">
      <table>
        <thead>
          <tr>
            <th>License number</th>
            <th>Model</th>
            <th>Car group</th>
            <th>Color</th>
            <th>Fueltype</th>
            <th>Rental office</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.licenseNumber}>
              <td>{car.licenseNumber}</td>
              <td>{car.model}</td>
              <td>{car.carGroup}</td>
              <td>{car.color}</td>
              <td>{car.fuelType}</td>
              <td>{car.rentalOffice}</td>
              <td>{car.carState}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CarTable;

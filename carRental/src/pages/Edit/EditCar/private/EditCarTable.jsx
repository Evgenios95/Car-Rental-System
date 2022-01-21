import React, { useState, useEffect } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { chooseCar } from "../../../../utils/parse-functions/updateFunctions";
import { setCarElementsWhenEdit } from "../../../../utils/parse-functions/carTableFunctions";

const EditCarTable = ({ setChosenCar, rentalOffice }) => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [error, setError] = useState();

  useEffect(async () => {
    await setCarElementsWhenEdit(setCars, setError, rentalOffice);
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
            <th>Model</th>
            <th>Color</th>
            <th>Fuel type</th>
            <th>License number</th>
            <th>Group</th>
            <th>Parking spot</th>
            <th>Rental office</th>
            <th>Mileage</th>
            <th>Tank full</th>
            <th>Person capacity</th>
            <th>Small luggage</th>
            <th>Big luggage</th>
            <th>State</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.licenseNumber}>
              <td>{car.model}</td>
              <td>{car.color}</td>
              <td>{car.fuelType}</td>
              <td>{car.licenseNumber}</td>
              <td>{car.carGroup}</td>
              <td>{car.parkingSlot}</td>
              <td>{car.rentalOffice}</td>
              <td>{car.mileage}</td>
              <td>{car.tankFull}</td>
              <td>{car.personCapacity}</td>
              <td>{car.smallLuggage}</td>
              <td>{car.bigLuggage}</td>
              <td>{car.carState}</td>

              <td>
                <FontAwesomeIcon
                  icon={faPlus}
                  onClick={() => {
                    chooseCar(car.carId, setChosenCar);
                  }}
                ></FontAwesomeIcon>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default EditCarTable;

import React, { useState, useEffect } from "react";
import "./CarTable.css";
import Parse from "parse";

const CarTable = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const Car = Parse.Object.extend("Car");
      const query = new Parse.Query(Car);
      query.include("carGroup");
      query.include("rentalOffice");
      query.include("carState");
      query.include("objectId");
      const carArray = [];

      try {
        const results = await query.find();
        console.log("results", results);
        for (const object of results) {
          const carObject = {
            carGroup: object.get("carGroup").get("name"),
            model: object.get("model"),
            licenseNumber: object.get("licenseNumber"),
            color: object.get("color"),
            fuelType: object.get("fuelType"),
            carState: object.get("carState").get("state"),
            rentalOffice: object.get("rentalOffice").get("officeNumber"),
          };
          console.log(carObject.licenseNumber);

          carArray.push(carObject);
        }
        setCars(carArray);
      } catch (error) {
        console.error("Error while fetching Car", error);
        setError(error);
      }
      setLoading(false);
    })();
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

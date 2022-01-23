import React, { useState, useEffect } from "react";
import "./CarOverviewPage.css";
import { setCarElements } from "../../utils/parse-functions/carTableFunctions";
import GrayContainer from "../../components/Layout/GrayContainer";
import GrayColumn from "../../components/Layout/GrayColumn";
import NavBar from "../../components/NavBar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TitleLabels } from "../../utils/constants/general-labels";
import DropDown from "../../components/DropDowns/DropDown";
import {
  ColumnLabels,
  ClassnameLabels,
} from "../../utils/constants/parse-labels";
import { filterCarsByRentalOffice } from "../../utils/functions/filteringFunctions";
import Button from "../../components/Button/Button";

const CarOverviewPage = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [error, setError] = useState();
  const [filteredCars, setfilteredCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(async () => {
    await setCarElements(setCars, setError);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  if (error || !Array.isArray(cars)) {
    return <p>There was an error loading your data!</p>;
  }
  console.log(searchTerm);
  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.carOverview} />
      <GrayContainer className="car-overview-gray-container">
        <DropDown
          type={ClassnameLabels.rentalOffice}
          attribute={ColumnLabels.rentalOffice.officeNo}
          labeltext={"Search by rental office"}
          className="car-search-dropdown"
          labelClassname="car-dropdown-select-label"
          onChange={({ target }) =>
            filterCarsByRentalOffice(
              { target },
              setfilteredCars,
              cars,
              setSearchTerm
            )
          }
        />

        <Button
          btnText="Reset Table"
          className="btn--primary reset-table-btn"
          onClick={() => setSearchTerm("")}
        ></Button>

        <GrayColumn>
          <div className="overview-container">
            <table>
              <thead>
                <tr>
                  <th>Model </th>
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
                </tr>
              </thead>
              <tbody>
                {searchTerm == ""
                  ? cars.map((car) => (
                      <tr key={car.id}>
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
                      </tr>
                    ))
                  : filteredCars.map((car) => (
                      <tr key={car.id}>
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
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </GrayColumn>
      </GrayContainer>
    </>
  );
};
export default CarOverviewPage;

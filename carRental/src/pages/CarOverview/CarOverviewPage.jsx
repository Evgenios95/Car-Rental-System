import React, { useState, useEffect } from "react";
import "./CarOverviewPage.css";
import { setCarElements } from "../../utils/parse-functions/carTableFunctions";
import GrayContainer from "../../components/Layout/GrayContainer";
import GrayColumn from "../../components/Layout/GrayColumn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TitleLabels } from "../../utils/constants/general-labels";
import DropDown from "../../components/DropDown/DropDown";
import {
  ColumnLabels,
  ClassnameLabels,
} from "../../utils/constants/parse-labels";
import { filterCarsByRentalOffice } from "../../utils/functions/handleFilteredCars";
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
      <GrayContainer>
        <DropDown
          type={ClassnameLabels.rentalOffice}
          attribute={ColumnLabels.rentalOffice.officeNo}
          labeltext={"Search by rental office"}
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
          btnText="Get all cars"
          className="btn--primary"
          onClick={() => setSearchTerm("")}
        ></Button>

        <GrayColumn>
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {searchTerm == ""
                  ? cars.map((car) => (
                      <tr key={car.id}>
                        <td>{car.licenseNumber}</td>
                        <td>{car.model}</td>
                        <td>{car.carGroup}</td>
                        <td>{car.color}</td>
                        <td>{car.fuelType}</td>
                        <td>{car.rentalOffice}</td>
                        <td>{car.carState}</td>
                        <td>
                          <Link to={`/cars/${car.id}`}>
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                            ></FontAwesomeIcon>
                          </Link>
                        </td>
                      </tr>
                    ))
                  : filteredCars.map((car) => (
                      <tr key={car.id}>
                        <td>{car.licenseNumber}</td>
                        <td>{car.model}</td>
                        <td>{car.carGroup}</td>
                        <td>{car.color}</td>
                        <td>{car.fuelType}</td>
                        <td>{car.rentalOffice}</td>
                        <td>{car.carState}</td>
                        <td>
                          <Link to={`/cars/${car.id}`}>
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                            ></FontAwesomeIcon>
                          </Link>
                        </td>
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

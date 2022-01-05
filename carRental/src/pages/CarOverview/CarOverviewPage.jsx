import React, { useState, useEffect } from "react";
import "./CarOverviewPage.css";
import { setCarElements } from "../../utils/parse-functions/carTableFunctions";
import GrayContainer from "../../components/Layout/GrayContainer";
import GrayColumn from "../../components/Layout/GrayColumn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";

const CarOverviewPage = () => {
  const [loading, setLoading] = useState(true);
  const [cars, setCars] = useState([]);
  const [error, setError] = useState();

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

  return (
    <>
      <NavBar />
      <GrayContainer>
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
                {cars.map((car) => (
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

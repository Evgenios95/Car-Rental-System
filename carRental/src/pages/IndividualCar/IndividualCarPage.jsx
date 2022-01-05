import "./IndividualCarPage.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCarById } from "../../utils/parse-functions/getCarByIdFunction";
import GrayContainer from "../../components/Layout/GrayContainer";
import GrayColumn from "../../components/Layout/GrayColumn";

const IndividualCarPage = () => {
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
};

export default IndividualCarPage;

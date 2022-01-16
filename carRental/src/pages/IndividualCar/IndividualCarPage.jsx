import "./IndividualCarPage.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getCarById } from "../../utils/parse-functions/getCarByIdFunction";
import GrayContainer from "../../components/Layout/GrayContainer";
import GrayColumn from "../../components/Layout/GrayColumn";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TitleLabels } from "../../utils/constants/general-labels";

const IndividualCarPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    getCarById(id, setCar, setError);
  }, []);

  return (
    <>
      <PageTitle title={TitleLabels.individualCar} />
      <GrayContainer>
        <GrayColumn>
          <div>It works: here is its model = {car.model}</div>
        </GrayColumn>
      </GrayContainer>
    </>
  );
};

export default IndividualCarPage;

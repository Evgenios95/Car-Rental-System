import NavBar from "../../components/NavBar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./RequestPage.css";
import { TitleLabels } from "../../utils/constants/general-labels";
import GrayContainer from "../../components/Layout/GrayContainer";
import PopUpButton from "../../components/PopUpButton/PopUpButton";
import { useState } from "react";
import OverviewCarGroup from "./OverviewCarGroups";
import RequestCarOverview from "./private/RequestCarOverview";
import { useEffect } from "react";

const RequestPage = () => {
  const [numberOfCarGroups, setNumberOfCarGroups] = useState([]);
  const [formData, setFormdata] = useState([]);
  const [carGroupsParkingSpot, setCarGroupsParkingSpot] = useState([]);
  const [getInfo, setGetInfo] = useState(false);
  const [alreadyRequested, setAlreadyRequested] = useState([]);
  const [chosenNow, setChosenNow] = useState([]);

  const chosenObject = {
    small: 0,
    medium: 0,
    large: 0,
    xLarge: 0,
    family: 0,
    business: 0,
    stationCar: 0,
    automatic: 0,
    smallAut: 0,
  };
  useEffect(() => {
    setChosenNow(chosenObject);
  }, []);
  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.request} />

      <GrayContainer>
        <OverviewCarGroup
          formData={formData}
          setFormdata={setFormdata}
          numberOfCarGroups={numberOfCarGroups}
          setNumberOfCarGroups={setNumberOfCarGroups}
          carGroupsParkingSpot={carGroupsParkingSpot}
          setCarGroupsParkingSpot={setCarGroupsParkingSpot}
          setGetInfo={setGetInfo}
          getInfo={getInfo}
          setAlreadyRequested={setAlreadyRequested}
        />
        <RequestCarOverview
          alreadyRequested={alreadyRequested}
          chosenNow={chosenNow}
          setChosenNow={setChosenNow}
        />
      </GrayContainer>

      <GrayContainer className="request-second-container">
        <PopUpButton
          popupQuestion="Are you sure you would like to cancel your changes?"
          popupBtnText="Cancel"
          confirmBtnText="Yes"
          rejectBtnText="No"
          onConfirmClick={() => window.location.reload(false)}
        />

        <PopUpButton
          popupQuestion="Are you sure you would like to send request for chosen cars?"
          popupBtnText="Send request"
          confirmBtnText="Yes"
          rejectBtnText="No"
          btnClassName="btn--primary"
          onConfirmClick={() =>
            alert("Sorry the button is not working at the moment :(")
          }
        />

        <PopUpButton
          popupQuestion="Your current changes will be lost."
          popupBtnText="Go back"
          className="btn--white"
          confirmBtnText="Go back"
          rejectBtnText="Keep editing"
          onConfirmClick={() => navigate(`/individual-booking/${bookingId}`)}
        />
      </GrayContainer>
    </>
  );
};
export default RequestPage;

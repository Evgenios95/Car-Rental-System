import GrayContainer from "../../components/Layout/GrayContainer";
import OverviewCarGroup from "../Request/OverviewCarGroups";
import { useState } from "react";
import PopUpButton from "../../components/PopUpButton/PopUpButton";
import GrayColumn from "../../components/Layout/GrayColumn";
import Subtitle from "../../components/Subtitle/Subtitle";
import "./ReleasePage.css";
import NavBar from "../../components/NavBar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TitleLabels } from "../../utils/constants/general-labels";
import { getAllRequests } from "../../utils/parse-functions/requestFunctions";
import { useEffect } from "react";
import AllRequestTable from "./private/AllRequestTable";
import ReleaseOverview from "./private/ReleaseOverview";
import { createAllReleaseObjects } from "../../utils/parse-functions/requestFunctions";

const ReleasePage = () => {
  const [numberOfCarGroups, setNumberOfCarGroups] = useState([]);
  const [formData, setFormdata] = useState([]);
  const [carGroupsParkingSpot, setCarGroupsParkingSpot] = useState([]);
  const [getInfo, setGetInfo] = useState(false);
  const [requests, setRequests] = useState([]);
  const [chosenRequest, setChosenRequest] = useState([]);
  console.log("formdata state", formData);

  useEffect(async () => {
    await getAllRequests(setRequests);
  }, []);

  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.release} />

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
        />

        <GrayColumn>
          <div className="release-second-column">
            <Subtitle stitle="Request overview" />
            <AllRequestTable
              requests={requests}
              chosenRequest={chosenRequest}
              setChosenRequest={setChosenRequest}
            />
            <Subtitle stitle="Chosen cars for release" />
            <ReleaseOverview
              chosenRequest={chosenRequest}
              setChosenRequest={setChosenRequest}
            />
          </div>
          <p className="release-summary">
            Cars to be released: {chosenRequest.length}
          </p>
        </GrayColumn>
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
          popupQuestion="Are you sure you would like to release the chosen cars?"
          popupBtnText="Release cars"
          confirmBtnText="Yes"
          rejectBtnText="No"
          btnClassName="btn--primary"
          onConfirmClick={() =>
            createAllReleaseObjects(chosenRequest, formData)
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
export default ReleasePage;

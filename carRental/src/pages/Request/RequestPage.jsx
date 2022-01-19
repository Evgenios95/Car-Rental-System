import NavBar from "../../components/NavBar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./RequestPage.css";
import { TitleLabels } from "../../utils/constants/general-labels";
import GrayContainer from "../../components/Layout/GrayContainer";
import PopUpButton from "../../components/PopUpButton/PopUpButton";
import { useState } from "react";
import OverviewCarGroup from "./OverviewCarGroups";
import RequestCarOverview from "./private/RequestCarOverview";

const RequestPage = () => {
  const [numberOfCarGroups, setNumberOfCarGroups] = useState([]);
  const [formData, setFormdata] = useState([]);
  const [carGroupsParkingSpot, setCarGroupsParkingSpot] = useState([]);
  const [getInfo, setGetInfo] = useState(false);

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
        />
        <RequestCarOverview />
      </GrayContainer>
      <GrayContainer className={"request-second-container"}>
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
          onConfirmClick={() => window.location.reload(false)}
        />
      </GrayContainer>
    </>
  );
};
export default RequestPage;

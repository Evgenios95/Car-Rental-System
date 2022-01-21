import NavBar from "../../components/NavBar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./RequestPage.css";
import { TitleLabels } from "../../utils/constants/general-labels";
import GrayContainer from "../../components/Layout/GrayContainer";
import PopUpButton from "../../components/PopUpButton/PopUpButton";
import { useState } from "react";
import OverviewCarGroup from "./OverviewCarGroups";
import RequestCarOverview from "./private/RequestCarOverview";
import { useNavigate } from "react-router-dom";

const RequestPage = () => {
  const navigate = useNavigate();
  const [numberOfCarGroups, setNumberOfCarGroups] = useState([]);
  const [formData, setFormData] = useState([]);
  const [carGroupsParkingSpot, setCarGroupsParkingSpot] = useState([]);
  const [getInfo, setGetInfo] = useState(false);
  const [alreadyRequested, setAlreadyRequested] = useState([]);

  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.request} />

      <GrayContainer>
        <OverviewCarGroup
          formData={formData}
          setFormdata={setFormData}
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
          setAlreadyRequested={setAlreadyRequested}
          formData={formData}
          setFormData={setFormData}
        />
      </GrayContainer>

      <GrayContainer className="request-second-container">
        <PopUpButton
          popupQuestion="The page will be reset, but succesfully sended request will not be lost."
          popupBtnText="Reset page"
          confirmBtnText="Yes"
          rejectBtnText="No"
          onConfirmClick={() => window.location.reload(false)}
        />

        <PopUpButton
          popupQuestion="Your current changes will be lost, but succesfully sended request will not be lost."
          popupBtnText="Booking overview"
          btnClassName="btn--primary"
          confirmBtnText="Go"
          rejectBtnText="Keep editing"
          onConfirmClick={() => navigate("/booking-overview")}
        />
      </GrayContainer>
    </>
  );
};
export default RequestPage;

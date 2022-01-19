import GrayContainer from "../../components/Layout/GrayContainer";
import OverviewCarGroup from "../Request/OverviewCarGroups";
import { useState } from "react";
import PopUpButton from "../../components/PopUpButton/PopUpButton";
import GrayColumn from "../../components/Layout/GrayColumn";
import Subtitle from "../../components/Subtitle/Subtitle";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReleasePage.css";
import NavBar from "../../components/NavBar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import { TitleLabels } from "../../utils/constants/general-labels";

const ReleasePage = () => {
  const [numberOfCarGroups, setNumberOfCarGroups] = useState([]);
  const [formData, setFormdata] = useState([]);
  const [carGroupsParkingSpot, setCarGroupsParkingSpot] = useState([]);
  const [getInfo, setGetInfo] = useState(false);
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
            <div className="release-second-table">
              <table>
                <thead>
                  <tr>
                    <th>Rental office</th>
                    <th>Car group</th>
                    <th>Delivery date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Subtitle stitle="Chosen cars for release" />
            <div className="release-third-table">
              <table>
                <thead>
                  <tr>
                    <th>Rental office</th>
                    <th>Car group</th>
                    <th>Delivery date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Cars to be released: 0</p>
          </div>
        </GrayColumn>
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
          popupQuestion="Are you sure you would like to release the chosen cars?"
          popupBtnText="Release cars"
          confirmBtnText="Yes"
          rejectBtnText="No"
          btnClassName="btn--primary"
          onConfirmClick={() => window.location.reload(false)}
        />
      </GrayContainer>
    </>
  );
};
export default ReleasePage;

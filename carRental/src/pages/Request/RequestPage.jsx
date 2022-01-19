import NavBar from "../../components/NavBar/Navbar";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./RequestPage.css";
import { TitleLabels } from "../../utils/constants/general-labels";
import GrayColumn from "../../components/Layout/GrayColumn";
import GrayContainer from "../../components/Layout/GrayContainer";
import CarGroupTable from "./CarGroupTable";
import Subtitle from "../../components/Subtitle/Subtitle";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import DropDown from "../../components/DropDown/DropDown";
import {
  ClassnameLabels,
  ColumnLabels,
} from "../../utils/constants/parse-labels";
import RequestTable from "./RequestTable";
import Button from "../../components/Button/Button";
import PopUpButton from "../../components/PopUpButton/PopUpButton";
import { useState } from "react";
import { onChangeHandler } from "../../utils/functions/onChangeHandlers";
import { getCarGroupsBooked } from "../../utils/parse-functions/cloudFunctions";

const RequestPage = () => {
  const [numberOfCarGroups, setNumberOfCarGroups] = useState([]);
  const [formData, setFormdata] = useState([]);
  console.log("formdata", formData);
  console.log("numberOfCarGroups", numberOfCarGroups);

  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.request} />
      <GrayContainer>
        <GrayColumn>
          <Subtitle stitle="Overview of booked car groups"></Subtitle>
          <div className="request-car-groups">
            <LabeledInput
              type="date"
              labelText="From date*"
              className="request-input-date"
            ></LabeledInput>
            <DropDown
              type={ClassnameLabels.rentalOffice}
              attribute={ColumnLabels.rentalOffice.officeNo}
              labeltext={"Rental office*"}
              className="office-search-dropdown"
              onChange={(e) => {
                onChangeHandler(e, "rentalOffice", setFormdata);
              }}
            ></DropDown>
            <Button
              btnText="Get info"
              className="btn--primary get-info-btn"
              onClick={async () => {
                await getCarGroupsBooked(formData, setNumberOfCarGroups);
              }}
            ></Button>
          </div>
          <CarGroupTable numberOfCarGroups={numberOfCarGroups}></CarGroupTable>
        </GrayColumn>
        <GrayColumn>
          <Subtitle stitle="Request cars"></Subtitle>
          <div className="request-car-groups">
            <LabeledInput
              type="number"
              labelText="Amount*"
              className="request-input-date"
            ></LabeledInput>
            <DropDown
              type={ClassnameLabels.carGroup}
              attribute={ColumnLabels.carGroup.name}
              labeltext={"Car group*"}
              className="office-search-dropdown"
            ></DropDown>
            <Button
              btnText="Add car"
              className="btn--primary get-info-btn"
              onClick={() => {
                console.log("Add car is clicked");
              }}
            ></Button>
          </div>

          <RequestTable></RequestTable>
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

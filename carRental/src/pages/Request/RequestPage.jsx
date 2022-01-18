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

const RequestPage = () => {
  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.request} />
      <GrayContainer>
        <GrayColumn>
          <Subtitle stitle="Overview of booked car groups"></Subtitle>

          <LabeledInput
            type="date"
            labelText="From date*"
            className="request-input"
          ></LabeledInput>
          <DropDown
            type={ClassnameLabels.rentalOffice}
            attribute={ColumnLabels.rentalOffice.officeNo}
            labeltext={"Rental office*"}
            className="request-drop-down-input"
          ></DropDown>
          <Button
            btnText="Get info"
            className="btn--primary"
            onClick={() => {
              console.log("Get info is clicked");
            }}
          ></Button>

          <CarGroupTable></CarGroupTable>
        </GrayColumn>
        <GrayColumn>
          <Subtitle stitle="Request cars"></Subtitle>

          <LabeledInput
            type="number"
            labelText="Amount*"
            className="request-input"
          ></LabeledInput>
          <DropDown
            type={ClassnameLabels.carGroup}
            attribute={ColumnLabels.carGroup.name}
            labeltext={"Car group*"}
            className="request-drop-down-input"
          ></DropDown>
          <Button
            btnText="Add car"
            className="btn--primary"
            onClick={() => {
              console.log("Add car is clicked");
            }}
          ></Button>

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

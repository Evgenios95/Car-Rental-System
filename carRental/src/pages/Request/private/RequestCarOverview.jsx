import RequestTable from "./RequestTable";
import GrayColumn from "../../../components/Layout/GrayColumn";
import Subtitle from "../../../components/Subtitle/Subtitle";
import Button from "../../../components/Button/Button";
import DropDown from "../../../components/DropDowns/DropDown";
import LabeledInput from "../../../components/LabeledInput/LabeledInput";
import {
  ClassnameLabels,
  ColumnLabels,
} from "../../../utils/constants/parse-labels";
import { useState } from "react";
import {
  onChangeIntHandler,
  onChangeHandler,
} from "../../../utils/functions/onChangeHandlers";

const RequestCarOverview = ({ alreadyRequested, chosenNow, setChosenNow }) => {
  const [formData, setFormData] = useState([]);
  // const addRequest = (formData, setChosenNow) => {
  // const carGroup = formData.carGroup;
  // setChosenNow((prevState) => {
  // let chosenObject = Object.assign({}, prevState.chosenObject);
  // chosenObject.carGroup += formData.number;
  // return { chosenObject };
  // });
  // };

  return (
    <GrayColumn>
      <Subtitle stitle="Request cars" />
      <div className="request-car-groups">
        <LabeledInput
          type="number"
          labelText="Amount*"
          className="request-input"
          onChange={(e) => onChangeIntHandler(e, "number", setFormData)}
        ></LabeledInput>

        <DropDown
          type={ClassnameLabels.carGroup}
          attribute={ColumnLabels.carGroup.name}
          labeltext={"Car group*"}
          className="office-search-dropdown"
          onChange={(e) => onChangeHandler(e, "carGroup", setFormData)}
        ></DropDown>

        <Button
          btnText="Add car"
          className="btn--primary request-btn"
          onClick={(e) => {
            alert("sorry the button is not working at the moment :(");
            // addRequest(formData, setChosenNow);
          }}
        ></Button>
      </div>
      <RequestTable
        alreadyRequested={alreadyRequested}
        chosenNow={chosenNow}
      ></RequestTable>
    </GrayColumn>
  );
};
export default RequestCarOverview;

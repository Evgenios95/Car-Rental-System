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
import { sendAllChosenRequests } from "../../../utils/parse-functions/requestFunctions";
import { getAlreadyRequested } from "../../../utils/parse-functions/cloudFunctions";
import PopUpButton from "../../../components/PopUpButton/PopUpButton";

const RequestCarOverview = ({
  alreadyRequested,
  setAlreadyRequested,
  formData,
  setFormData,
}) => {
  const [requestSum, setRequestSum] = useState([0]);

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
          btnText="Send request"
          className="btn--primary request-btn"
          onClick={async () => {
            await sendAllChosenRequests(formData);
            await getAlreadyRequested(formData, setAlreadyRequested);
          }}
        />
      </div>

      <RequestTable alreadyRequested={alreadyRequested}></RequestTable>
    </GrayColumn>
  );
};
export default RequestCarOverview;

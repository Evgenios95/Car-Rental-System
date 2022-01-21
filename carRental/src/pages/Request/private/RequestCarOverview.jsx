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

const RequestCarOverview = () => {
  return (
    <GrayColumn>
      <Subtitle stitle="Request cars" />
      <div className="request-car-groups">
        <LabeledInput
          type="number"
          labelText="Amount*"
          className="request-input"
        ></LabeledInput>

        <DropDown
          type={ClassnameLabels.carGroup}
          attribute={ColumnLabels.carGroup.name}
          labeltext={"Car group*"}
          className="office-search-dropdown"
        ></DropDown>

        <Button
          btnText="Add car"
          className="btn--primary request-btn"
          onClick={() => {
            console.log("Add car is clicked");
          }}
        ></Button>
      </div>
      <RequestTable></RequestTable>
    </GrayColumn>
  );
};
export default RequestCarOverview;

import GrayColumn from "../../components/Layout/GrayColumn";
import Subtitle from "../../components/Subtitle/Subtitle";

import {
  ColumnLabels,
  ClassnameLabels,
} from "../../utils/constants/parse-labels";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import DropDown from "../../components/DropDowns/DropDown";
import Button from "../../components/Button/Button";
import CarGroupTable from "./CarGroupTable";
import { getCarGroupsBooked } from "../../utils/parse-functions/cloudFunctions";
import { onChangeHandler } from "../../utils/functions/onChangeHandlers";

const OverviewCarGroup = ({
  formData,
  setFormdata,
  numberOfCarGroups,
  setNumberOfCarGroups,
}) => {
  return (
    <GrayColumn>
      <Subtitle stitle="Overview of booked car groups"></Subtitle>
      <div className="request-car-groups">
        <LabeledInput
          type="date"
          labelText="From date*"
          className="request-input"
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
          className="btn--primary request-btn"
          onClick={async () => {
            await getCarGroupsBooked(formData, setNumberOfCarGroups);
          }}
        ></Button>
      </div>
      <CarGroupTable numberOfCarGroups={numberOfCarGroups}></CarGroupTable>
    </GrayColumn>
  );
};
export default OverviewCarGroup;

import GrayColumn from "../../components/Layout/GrayColumn";
import Subtitle from "../../components/Subtitle/Subtitle";
import { onChangeHandler } from "../../utils/functions/onChangeHandlers";
import {
  ColumnLabels,
  ClassnameLabels,
} from "../../utils/constants/parse-labels";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import DropDown from "../../components/DropDowns/DropDown";
import Button from "../../components/Button/Button";
import CarGroupTable from "./CarGroupTable";
import {
  getAlreadyRequested,
  getBookedCarGroups,
  getCarGroupsParkingSpot,
} from "../../utils/parse-functions/cloudFunctions";

const OverviewCarGroup = ({
  formData,
  setFormdata,
  numberOfCarGroups,
  setNumberOfCarGroups,
  carGroupsParkingSpot,
  setCarGroupsParkingSpot,
  setGetInfo,
  getInfo,
  setAlreadyRequested,
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
            await getBookedCarGroups(formData, setNumberOfCarGroups);
            await getCarGroupsParkingSpot(formData, setCarGroupsParkingSpot);
            await getAlreadyRequested(formData, setAlreadyRequested);
            setGetInfo(true);
          }}
        ></Button>
      </div>
      <CarGroupTable
        numberOfCarGroups={numberOfCarGroups}
        carGroupsParkingSpot={carGroupsParkingSpot}
        getInfo={getInfo}
      ></CarGroupTable>
    </GrayColumn>
  );
};
export default OverviewCarGroup;

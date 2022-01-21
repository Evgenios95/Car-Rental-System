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
  //Make a function for this one.
  var date = new Date();
  var isoDateTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  return (
    <GrayColumn>
      <Subtitle stitle="Overview of booked car groups" />

      <div className="request-car-groups">
        <LabeledInput
          type="date"
          labelText="From date*"
          min={isoDateTime}
          className="request-input"
        />

        <DropDown
          type={ClassnameLabels.rentalOffice}
          attribute={ColumnLabels.rentalOffice.officeNo}
          labeltext={"Rental office*"}
          className="office-search-dropdown"
          onChange={(e) => {
            onChangeHandler(e, "rentalOffice", setFormdata);
          }}
        />

        <Button
          btnText="Get info"
          className="btn--primary request-btn"
          onClick={async () => {
            await getBookedCarGroups(formData, setNumberOfCarGroups);
            await getCarGroupsParkingSpot(formData, setCarGroupsParkingSpot);
            await getAlreadyRequested(formData, setAlreadyRequested);
            setGetInfo(true);
          }}
        />
      </div>

      <CarGroupTable
        numberOfCarGroups={numberOfCarGroups}
        carGroupsParkingSpot={carGroupsParkingSpot}
        getInfo={getInfo}
      />
    </GrayColumn>
  );
};
export default OverviewCarGroup;

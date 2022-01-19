// This is a dummy function. Therefore we did not use time to refactor it.

import CarGroupTableHead from "./CarGroupTableHead";
import InParkingLotRow from "./InParkingLotRow";
import NeededRow from "./NeededRow";
import SurplusRow from "./SurplusRow";

const CarGroupTable = ({
  numberOfCarGroups,
  carGroupsParkingSpot,
  getInfo,
}) => {
  return (
    <>
      <table>
        <CarGroupTableHead />
        <tbody>
          <NeededRow numberOfCarGroups={numberOfCarGroups} />
          <InParkingLotRow carGroupsParkingSpot={carGroupsParkingSpot} />
          <SurplusRow
            numberOfCarGroups={numberOfCarGroups}
            carGroupsParkingSpot={carGroupsParkingSpot}
            getInfo={getInfo}
          />
        </tbody>
      </table>
    </>
  );
};
export default CarGroupTable;

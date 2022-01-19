const SurplusRow = ({ carGroupsParkingSpot, numberOfCarGroups, getInfo }) => {
  console.log(getInfo);
  return getInfo ? (
    <tr>
      <td>Surplus</td>
      <td>{carGroupsParkingSpot.small - numberOfCarGroups.small}</td>
      <td>{carGroupsParkingSpot.medium - numberOfCarGroups.medium}</td>
      <td>{carGroupsParkingSpot.large - numberOfCarGroups.large}</td>
      <td>{carGroupsParkingSpot.xLarge - numberOfCarGroups.xLarge}</td>
      <td>{carGroupsParkingSpot.family - numberOfCarGroups.family}</td>
      <td>{carGroupsParkingSpot.business - numberOfCarGroups.business}</td>
      <td>{carGroupsParkingSpot.stationCar - numberOfCarGroups.stationCar}</td>
      <td>{carGroupsParkingSpot.automatic - numberOfCarGroups.automatic}</td>
      <td>{carGroupsParkingSpot.smallAut - numberOfCarGroups.smallAut}</td>
    </tr>
  ) : (
    <tr>
      {" "}
      <td>Surplus</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );
};
export default SurplusRow;

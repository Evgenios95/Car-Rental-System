const InParkingLotRow = ({ carGroupsParkingSpot }) => {
  return (
    <tr>
      <td>In parkinglot</td>
      <td>{carGroupsParkingSpot.small}</td>
      <td>{carGroupsParkingSpot.medium}</td>
      <td>{carGroupsParkingSpot.large}</td>
      <td>{carGroupsParkingSpot.xLarge}</td>
      <td>{carGroupsParkingSpot.family}</td>
      <td>{carGroupsParkingSpot.business}</td>
      <td>{carGroupsParkingSpot.stationCar}</td>
      <td>{carGroupsParkingSpot.automatic}</td>
      <td>{carGroupsParkingSpot.smallAut}</td>
    </tr>
  );
};
export default InParkingLotRow;

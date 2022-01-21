const NeededRow = ({ numberOfCarGroups }) => {
  return (
    <tr>
      <td>Needed</td>
      <td>{numberOfCarGroups.small}</td>
      <td>{numberOfCarGroups.medium}</td>
      <td>{numberOfCarGroups.large}</td>
      <td>{numberOfCarGroups.xLarge}</td>
      <td>{numberOfCarGroups.family}</td>
      <td>{numberOfCarGroups.business}</td>
      <td>{numberOfCarGroups.stationCar}</td>
      <td>{numberOfCarGroups.automatic}</td>
      <td>{numberOfCarGroups.smallAut}</td>
    </tr>
  );
};
export default NeededRow;

// This is a dummy function. Therefore we did not use time to refactor it.

const CarGroupTable = ({ numberOfCarGroups }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Small</th>
            <th>Medium</th>
            <th>Large</th>
            <th>X-Large</th>
            <th>Family</th>
            <th>Business</th>
            <th>Stationcar</th>
            <th>Automatic</th>
            <th>Small Aut</th>
          </tr>
        </thead>
        <tbody>
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
          <tr>
            <td>In parkinglot</td>
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
          <tr>
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
        </tbody>
      </table>
    </>
  );
};
export default CarGroupTable;

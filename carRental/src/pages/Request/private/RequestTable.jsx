const RequestTable = ({ alreadyRequested }) => {
  return (
    <>
      <div className="request-second-table">
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
              <td>Already requested</td>
              <td>{alreadyRequested.small}</td>
              <td>{alreadyRequested.medium}</td>
              <td>{alreadyRequested.large}</td>
              <td>{alreadyRequested.xLarge}</td>
              <td>{alreadyRequested.family}</td>
              <td>{alreadyRequested.business}</td>
              <td>{alreadyRequested.stationCar}</td>
              <td>{alreadyRequested.automatic}</td>
              <td>{alreadyRequested.smallAut}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default RequestTable;

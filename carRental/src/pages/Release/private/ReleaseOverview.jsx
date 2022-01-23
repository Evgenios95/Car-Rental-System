import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { unSelectRequest } from "../../../utils/parse-functions/requestFunctions";

const ReleaseOverview = ({ chosenRequest, setChosenRequest }) => {
  return (
    <>
      <div className="release-third-table">
        <table>
          <thead>
            <tr>
              <th>Rental office</th>
              <th>Car group</th>
              <th>Delivery date</th>
              <th>Resolved</th>
              <th>Request id</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {chosenRequest.map((request, i) => (
              <tr key={i}>
                <td>{request.rentalOffice}</td>
                <td>{request.carGroup}</td>
                <td>{request.deliveryDate}</td>
                <td>{request.resolved}</td>
                <td>{request.requestId}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faMinus}
                    onClick={() => {
                      unSelectRequest(request, chosenRequest, setChosenRequest);
                    }}
                  ></FontAwesomeIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default ReleaseOverview;

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { chooseRequest } from "../../../utils/parse-functions/requestFunctions";

const AllRequestTable = ({ requests, chosenRequest, setChosenRequest }) => {
  return (
    <>
      <div className="release-second-table">
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
            {requests.map((request, i) => (
              <tr key={i}>
                <td>{request.rentalOffice}</td>
                <td>{request.carGroup}</td>
                <td>{request.deliveryDate}</td>
                <td>{request.resolved}</td>
                <td>{request.requestId}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faPlus}
                    onClick={() => {
                      chooseRequest(request, chosenRequest, setChosenRequest);
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
export default AllRequestTable;

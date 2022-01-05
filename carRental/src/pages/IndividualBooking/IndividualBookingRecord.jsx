import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const IndividualBookingRecord = ({ booking, bookingId }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Pick up office</th>
          <th>Return office</th>
          <th>Pick up time</th>
          <th>Return time</th>
          <th>Car group</th>
          <th>Booking state</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{booking.pickUpOffice}</td>
          <td>{booking.returnOffice}</td>
          <td>{booking.pickUpTime}</td>
          <td>{booking.returnTime}</td>
          <td>{booking.carGroup}</td>
          <td>{booking.bookingState}</td>
          <td>
            {" "}
            <Link to={`/edit-booking/${bookingId}`}>
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default IndividualBookingRecord;

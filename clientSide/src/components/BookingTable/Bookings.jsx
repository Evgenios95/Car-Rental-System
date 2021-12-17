import TimeTableData from "./TimeTableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Bookings = ({ bookings }) => {
  return bookings.map((b, i) => (
    <tr key={i}>
      <td>{b.customerFirstName}</td>
      <td>{b.customerLastName}</td>
      <td>{b.customerDriversLicense}</td>
      <td>{b.pickUpOffice}</td>
      <TimeTableData bookingTime={b.pickUpTime} />
      <TimeTableData bookingTime={b.returnTime} />
      <td>{b.carGroup}</td>
      <td>{b.carLicenseNumber}</td>
      <td>{b.bookingState}</td>
      <td>
        <Link to={`/individualBooking/${b.bookingId}`}>
          <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  ));
};

export default Bookings;

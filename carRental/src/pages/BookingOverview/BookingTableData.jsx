import BookingTimeTableData from "./BookingTimeTableData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BookingTableData = ({ bookings }) => {
  return bookings.map((b, i) => (
    <tr key={i}>
      <td>{b.customerFirstName}</td>
      <td>{b.customerLastName}</td>
      <td>{b.customerDriversLicense}</td>
      <td>{b.pickUpOffice}</td>
      <BookingTimeTableData bookingTime={b.pickUpTime} />
      <BookingTimeTableData bookingTime={b.returnTime} />
      <td>{b.carGroup}</td>
      <td>{b.carLicenseNumber}</td>
      <td>{b.bookingState}</td>
      <td>
        <Link to={`/individual-booking/${b.bookingId}`}>
          <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon>
        </Link>
      </td>
    </tr>
  ));
};

export default BookingTableData;

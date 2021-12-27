import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const CustomerRecord = ({ booking, bookingId, customer }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Driver license</th>
          <th>Phone number</th>
          <th>E-mail</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{customer.firstName}</td>
          <td>{customer.lastName}</td>
          <td>{customer.age}</td>
          <td>{customer.address}</td>
          <td>{customer.driversLicenseId}</td>
          <td>{customer.phoneNumber}</td>
          <td>{customer.eMail}</td>
          <td>
            {" "}
            <Link to={`/editCustomer/${bookingId}/${booking.customerId}`}>
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CustomerRecord;

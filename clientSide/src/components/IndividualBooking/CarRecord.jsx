import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const CarRecord = ({ booking, bookingId, car }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Model </th>
          <th>Color</th>
          <th>Fuel type</th>
          <th>License number</th>
          <th>Group</th>
          <th>Parking slot</th>
          <th>State</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{car.model}</td>
          <td>{car.color}</td>
          <td>{car.fuelType}</td>
          <td>{car.licensNumber}</td>
          <td>{car.carGroup}</td>
          <td>{car.parkingSlot}</td>
          <td>{car.carState}</td>
          <td>
            {" "}
            <Link to={`/editCar/${bookingId}/${booking.carId}`}>
              <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default CarRecord;

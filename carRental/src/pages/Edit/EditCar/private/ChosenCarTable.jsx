import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChosenCarTable = ({ chosenCar, chooseCar, setChosenCar }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Model </th>
          <th>Color</th>
          <th>Fuel type</th>
          <th>License number</th>
          <th>Group</th>
          <th>Parking spot</th>
          <th>Rental office</th>
          <th>State</th>
          <th>Mileage</th>
          <th>Tank full</th>
          <th>Person capacity</th>
          <th>Small luggage</th>
          <th>Big luggage</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{chosenCar.model}</td>
          <td>{chosenCar.color}</td>
          <td>{chosenCar.fuelType}</td>
          <td>{chosenCar.licensNumber}</td>
          <td>{chosenCar.carGroup}</td>
          <td>{chosenCar.parkingSlot}</td>
          <td>{chosenCar.rentalOffice}</td>
          <td>{chosenCar.carState}</td>
          <td>{chosenCar.mileage}</td>
          <td>{chosenCar.tankFull}</td>
          <td>{chosenCar.personCapacity}</td>
          <td>{chosenCar.smallLuggage}</td>
          <td>{chosenCar.bigLuggage}</td>
          <td>
            {" "}
            <FontAwesomeIcon
              icon={faMinus}
              onClick={() => {
                chooseCar("JDJAjsjElj", setChosenCar);
              }}
            ></FontAwesomeIcon>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default ChosenCarTable;

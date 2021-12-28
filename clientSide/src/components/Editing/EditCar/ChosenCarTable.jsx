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
          <th>Parking slot</th>
          <th>State</th>
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
          <td>{chosenCar.carState}</td>
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

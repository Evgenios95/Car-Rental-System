import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
  HardcodedFieldLabels,
} from "../text-labels/parse-labels";
import Parse from "parse";

export const setCarElements = async (setCars, setError) => {
  const Car = Parse.Object.extend(ClassnameLabels.car);
  const query = new Parse.Query(Car);
  query.include(ColumnLabels.car.group);
  query.include(ColumnLabels.car.rentalOffice);
  query.include(ColumnLabels.car.state);
  query.include(ColumnLabels.car.id);
  query.notEqualTo(ColumnLabels.car.licenseNo, HardcodedFieldLabels.car);
  const carArray = [];

  try {
    const results = await query.find();
    for (const object of results) {
      const carObject = {
        carGroup: object
          .get(ColumnLabels.booking.carGroup)
          .get(ColumnLabels.carGroup.name),
        model: object.get(ColumnLabels.car.model),
        licenseNumber: object.get(ColumnLabels.car.licenseNo),
        color: object.get(ColumnLabels.car.color),
        fuelType: object.get(ColumnLabels.car.fuel),
        carState: object.get(ColumnLabels.car.state).get(ColumnLabels.carState),
        rentalOffice: object
          .get(ColumnLabels.car.rentalOffice)
          .get(ColumnLabels.rentalOffice.officeNo),
        carId: object.id,
      };

      carArray.push(carObject);
    }
    setCars(carArray);
  } catch (error) {
    console.error(ErrorLabels.fetchCar, error);
    setError(error);
  }
};

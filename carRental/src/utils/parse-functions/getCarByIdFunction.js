import Parse from "parse";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
} from "../constants/parse-labels";

export const getCarById = async (id, setCar, setError) => {
  const Car = Parse.Object.extend(ClassnameLabels.car);
  const query = new Parse.Query(Car);
  query.include(ColumnLabels.car.group);
  query.include(ColumnLabels.car.state);
  query.include(ColumnLabels.car.rentalOffice);
  query.equalTo("objectId", id);
  try {
    const result = await query.find();
    const carObject = {
      model: result[0].get(ColumnLabels.car.model),
      licenseNumber: result[0].get(ColumnLabels.car.licenseNo),
      color: result[0].get(ColumnLabels.car.color),
      fuelType: result[0].get(ColumnLabels.car.fuel),
      carState: result[0]
        .get(ColumnLabels.car.state)
        .get(ColumnLabels.carState),
      rentalOffice: result[0]
        .get(ColumnLabels.car.rentalOffice)
        .get(ColumnLabels.rentalOffice.officeNo),
      carGroup: result[0]
        .get(ColumnLabels.car.group)
        .get(ColumnLabels.carGroup.name),
      parkingSlot: result[0].get(ColumnLabels.car.parkingSlot),
    };
    console.log("carobject", carObject);
    setCar(carObject);
  } catch (error) {
    console.error(ErrorLabels.fetchCar, error);
    setError(error);
  }
};

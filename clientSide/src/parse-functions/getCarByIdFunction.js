import Parse from "parse";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
} from "../text-labels/parse-labels";

export const getCarById = async (setError, setCar) => {
  const Car = Parse.Object.extend(ClassnameLabels.car);
  const query = new Parse.Query(Car);
  query.include(ColumnLabels.car.group);
  query.include(ColumnLabels.car.state);
  query.include(ColumnLabels.car.rentalOffice);
  query.equalTo("objectId", id);
  const result = await query.find();
  console.log("result", result);
  try {
    const carObject = {
      model: result[0].get("model"),
      licenseNumber: result[0].get("licenseNumber"),
      color: result[0].get("color"),
      fuelType: result[0].get("fuelType"),
      carState: result[0].get("carState").get("state"),
      rentalOffice: result[0].get("rentalOffice").get("officeNumber"),
      carGroup: result[0].get("carGroup").get("name"),
      parkingSlot: result[0].get("parkingSlot"),
    };
    console.log("carobject", carObject);
    setCar(carObject);
  } catch (error) {
    console.error(ErrorLabels.fetchCar, error);
    setError(error);
  }
};

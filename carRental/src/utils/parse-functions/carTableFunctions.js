import Parse from "parse";
import {
  ColumnLabels,
  ErrorLabels,
  HardcodedFieldLabels,
  ClassnameLabels,
} from "../constants/parse-labels";
import { getCarStatePointer, getOfficePointer } from "./pointerFunctions";

export const setCarElements = async (setCars, setError) => {
  const Car = Parse.Object.extend(ClassnameLabels.car);

  const query = new Parse.Query(Car);
  query.include(ColumnLabels.car.group);
  query.include(ColumnLabels.car.rentalOffice);
  query.include(ColumnLabels.car.state);
  query.include(ColumnLabels.car.id);
  query.include(ColumnLabels.nestedPointers.carIdAndRentalOffice);
  query.notEqualTo(ColumnLabels.car.licenseNo, HardcodedFieldLabels.car);
  const carArray = [];

  try {
    const results = await query.find();
    for (const object of results) {
      const carObject = {
        id: object.id,
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
        tankFull: object.get(ColumnLabels.car.tankFull),
        mileage: object.get(ColumnLabels.car.mileage),
        personCapacity: object
          .get(ColumnLabels.car.group)
          .get(ColumnLabels.carGroup.personCapacity),
        smallLuggage: object
          .get(ColumnLabels.car.group)
          .get(ColumnLabels.carGroup.smallLuggage),
        bigLuggage: object
          .get(ColumnLabels.car.group)
          .get(ColumnLabels.carGroup.bigLuggage),
        carId: object.id,
        rentalOffice: object
          .get(ColumnLabels.car.rentalOffice)
          .get(ColumnLabels.rentalOffice.officeNo),
        parkingSlot: object.get(ColumnLabels.car.parkingSlot),
      };
      carArray.push(carObject);
    }
    setCars(carArray);
  } catch (error) {
    console.error(ErrorLabels.fetchCar, error);
    setError(error);
  }
};

export const setCarElementsWhenEdit = async (
  setCars,
  setError,
  rentalOffice
) => {
  const Car = Parse.Object.extend(ClassnameLabels.car);

  const officePointer = await getOfficePointer(rentalOffice);
  const carStatePointerReady = await getCarStatePointer("ready");
  const carStatePointerReturned = await getCarStatePointer("returned");

  const returnedQuery = new Parse.Query(Car);
  returnedQuery.include(ColumnLabels.car.group);
  returnedQuery.include(ColumnLabels.car.rentalOffice);
  returnedQuery.include(ColumnLabels.car.state);
  returnedQuery.include(ColumnLabels.car.id);
  returnedQuery.include(ColumnLabels.nestedPointers.carIdAndRentalOffice);
  returnedQuery.equalTo(ColumnLabels.car.rentalOffice, officePointer);
  returnedQuery.equalTo(ColumnLabels.car.state, carStatePointerReturned);

  const readyQuery = new Parse.Query(Car);
  readyQuery.include(ColumnLabels.car.group);
  readyQuery.include(ColumnLabels.car.rentalOffice);
  readyQuery.include(ColumnLabels.car.state);
  readyQuery.include(ColumnLabels.car.id);
  readyQuery.include(ColumnLabels.nestedPointers.carIdAndRentalOffice);
  readyQuery.equalTo(ColumnLabels.car.rentalOffice, officePointer);
  readyQuery.equalTo(ColumnLabels.car.state, carStatePointerReady);

  const mainQuery = Parse.Query.or(Parse.Query.or(returnedQuery, readyQuery));
  const carArray = [];

  try {
    const results = await mainQuery.find();
    for (const object of results) {
      const carObject = {
        id: object.id,
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
        tankFull: object.get(ColumnLabels.car.tankFull),
        mileage: object.get(ColumnLabels.car.mileage),
        personCapacity: object
          .get(ColumnLabels.car.group)
          .get(ColumnLabels.carGroup.personCapacity),
        smallLuggage: object
          .get(ColumnLabels.car.group)
          .get(ColumnLabels.carGroup.smallLuggage),
        bigLuggage: object
          .get(ColumnLabels.car.group)
          .get(ColumnLabels.carGroup.bigLuggage),
        carId: object.id,
        rentalOffice: object
          .get(ColumnLabels.car.rentalOffice)
          .get(ColumnLabels.rentalOffice.officeNo),
        parkingSlot: object.get(ColumnLabels.car.parkingSlot),
      };
      carArray.push(carObject);
    }
    setCars(carArray);
  } catch (error) {
    console.error(ErrorLabels.fetchCar, error);
    setError(error);
  }
};

import Parse from "parse";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
  HardcodedFieldLabels,
} from "../text-labels/parse-labels";

export const getOfficePointer = async (officeInput) => {
  const RentalOffice = Parse.Object.extend(ClassnameLabels.rentalOffice);
  const query = new Parse.Query(RentalOffice);
  query.equalTo(ColumnLabels.rentalOffice.officeNo, parseInt(officeInput));

  try {
    const officeResult = await query.find();
    return officeResult[0].toPointer();
  } catch (error) {
    console.error(ErrorLabels.rentalOffice, error);
  }
};

export const getBookingStatePointer = async () => {
  const bookingStateInDB = Parse.Object.extend(ClassnameLabels.bookingState);
  const query = new Parse.Query(bookingStateInDB);
  query.equalTo(ColumnLabels.bookingState.state, HardcodedFieldLabels.waiting);
  try {
    const currentBookingState = await query.find();
    return currentBookingState[0].toPointer();
  } catch (error) {
    console.error(ErrorLabels.bookingState, error);
  }
};
export const getBookingStatePointerFinish = async () => {
  const bookingStateInDB = Parse.Object.extend(ClassnameLabels.bookingState);
  const query = new Parse.Query(bookingStateInDB);
  query.equalTo(ColumnLabels.bookingState.state, HardcodedFieldLabels.finish);
  try {
    const currentBookingState = await query.find();
    return currentBookingState[0].toPointer();
  } catch (error) {
    console.error(ErrorLabels.bookingState, error);
  }
};

export const getBookingStatePointerForEdit = async (bookingState) => {
  const bookingStateInDB = Parse.Object.extend(ClassnameLabels.bookingState);
  const query = new Parse.Query(bookingStateInDB);
  query.equalTo("state", bookingState);
  try {
    const currentBookingState = await query.find();
    return currentBookingState[0].toPointer();
  } catch (error) {
    console.error(ErrorLabels.bookingState, error);
  }
};

export const getCarGroupPointer = async (carGroupName) => {
  const CarGroup = Parse.Object.extend(ClassnameLabels.carGroup);
  const query = new Parse.Query(CarGroup);
  query.equalTo(ColumnLabels.carGroup.name, carGroupName);
  try {
    const carGroupResult = await query.find();
    return carGroupResult[0].toPointer();
  } catch (error) {
    console.error(ErrorLabels.carGroup, error);
  }
};
export const getCarStatePointer = async (carState) => {
  const CarState = Parse.Object.extend(ClassnameLabels.carState);
  const query = new Parse.Query(CarState);
  query.equalTo(ColumnLabels.carState, carState);
  try {
    const carStateResult = await query.find();
    return carStateResult[0].toPointer();
  } catch (error) {
    console.error(ErrorLabels.carState, error);
  }
};
export const getCarPointer = async (carId) => {
  const Car = Parse.Object.extend(ClassnameLabels.car);
  const query = new Parse.Query(Car);
  query.equalTo("objectId", carId);
  try {
    const carResult = await query.find();
    return carResult[0].toPointer();
  } catch (error) {
    console.error(ErrorLabels.fetchCar, error);
  }
};

export const getCustomerPointer = async (customerId) => {
  const Customer = Parse.Object.extend(ClassnameLabels.customer);
  const query = new Parse.Query(Customer);
  query.equalTo("objectId", customerId);
  try {
    const customerResult = await query.find();
    return customerResult[0].toPointer();
  } catch (error) {
    console.error(ErrorLabels.customer, error);
  }
};

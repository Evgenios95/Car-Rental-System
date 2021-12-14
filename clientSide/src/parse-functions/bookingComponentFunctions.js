import Parse from "parse";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
  ResultLabels,
} from "../text-labels/parse-labels";

export const getOfficePointer = async (officeInput) => {
  const RentalOffice = Parse.Object.extend(ClassnameLabels.rentalOffice);
  const query = new Parse.Query(RentalOffice);
  query.equalTo(ColumnLabels.rentalOffice.officeNo, parseInt(officeInput));
  console.log(officeInput);
  try {
    const officeResult = await query.find();
    // console.log(officeResult[0]);
    return officeResult[0].toPointer();
  } catch (error) {
    console.error(ErrorLabels.rentalOffice, error);
  }
};

export const getBookingStatePointer = async () => {
  const bookingStateInDB = Parse.Object.extend(ClassnameLabels.bookingState);
  const query = new Parse.Query(bookingStateInDB);
  query.equalTo(ColumnLabels.bookingState, "waiting");
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

export const createCustomer = async (formData) => {
  const myNewObject = new Parse.Object(ClassnameLabels.customer);
  myNewObject.set(ColumnLabels.customer.firstName, formData.firstName);
  myNewObject.set(ColumnLabels.customer.lastName, formData.lastName);
  myNewObject.set(ColumnLabels.customer.address, formData.address);
  myNewObject.set(ColumnLabels.customer.email, formData.email);
  myNewObject.set(ColumnLabels.customer.age, formData.age);
  myNewObject.set(ColumnLabels.customer.phoneNumber, formData.phoneNo);
  myNewObject.set(
    ColumnLabels.customer.driversLicenseNo,
    formData.driversLicenseNo
  );
  try {
    const customer = await myNewObject.save();
    return customer.toPointer();
    // Access the Parse Object attributes using the .GET method
  } catch (error) {
    console.error(ErrorLabels.customer, error);
  }
};

export const createBooking = async (e, formData) => {
  e.preventDefault();
  const customerPointer = await createCustomer(formData);
  const pickupOfficePointer = await getOfficePointer(formData.pickUpOffice);
  const returnOfficePointer = await getOfficePointer(formData.returnOffice);
  const carGroupPointer = await getCarGroupPointer(formData.carGroup);
  const bookingStatePointer = await getBookingStatePointer();

  const myNewObject = new Parse.Object(ClassnameLabels.booking);
  myNewObject.set(
    ColumnLabels.booking.pickUpTime,
    new Date(formData.pickupDate)
  );
  myNewObject.set(
    ColumnLabels.booking.returnTime,
    new Date(formData.returnDate)
  );
  myNewObject.set(ColumnLabels.booking.customerId, customerPointer);
  myNewObject.set(ColumnLabels.booking.pickUpOffice, pickupOfficePointer);
  myNewObject.set(ColumnLabels.booking.returnOffice, returnOfficePointer);
  myNewObject.set(ColumnLabels.booking.carGroup, carGroupPointer);
  myNewObject.set(ColumnLabels.booking.bookingState, bookingStatePointer);
  try {
    const result = await myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log(ResultLabels.booking, result);
  } catch (error) {
    console.error(ErrorLabels.booking, error);
  }
};

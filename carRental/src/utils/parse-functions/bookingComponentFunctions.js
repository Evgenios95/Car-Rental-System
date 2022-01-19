import Parse from "parse";
import {
  getOfficePointer,
  getCarGroupPointer,
  getBookingStatePointer,
} from "./pointerFunctions";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
} from "../constants/parse-labels";

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

export const createBooking = async (e, formData, navigate) => {
  e.preventDefault();
  const customerPointer = await createCustomer(formData);
  const pickupOfficePointer = await getOfficePointer(formData.pickUpOffice);
  const returnOfficePointer = await getOfficePointer(formData.returnOffice);
  const carGroupPointer = await getCarGroupPointer(formData.carGroup);
  const bookingStatePointer = await getBookingStatePointer();

  const myNewObject = new Parse.Object(ClassnameLabels.booking);
  myNewObject.set(
    ColumnLabels.booking.pickUpTime,
    new Date(formData.pickupDate + " " + formData.pickUpTime)
  );
  myNewObject.set(
    ColumnLabels.booking.returnTime,
    new Date(formData.returnDate + " " + formData.returnTime)
  );
  myNewObject.set(ColumnLabels.booking.customerId, customerPointer);
  myNewObject.set(ColumnLabels.booking.pickUpOffice, pickupOfficePointer);
  myNewObject.set(ColumnLabels.booking.returnOffice, returnOfficePointer);
  myNewObject.set(ColumnLabels.booking.carGroup, carGroupPointer);
  myNewObject.set(ColumnLabels.booking.bookingState, bookingStatePointer);

  try {
    const result = await myNewObject.save();
    console.log("Booking created", result);

    // Different navigation when assigning a car for walkins
    if (formData.specificCar == "Now") {
      alert("Booking successfully created. \nChoose a specific car now.");
      navigate(`/individual-booking/${result.id}`);
    } else {
      alert("Booking successfully created. \nCar to be assigned later.");
      navigate("/booking-overview");
    }
  } catch (error) {
    console.error(ErrorLabels.booking, error);
  }
};

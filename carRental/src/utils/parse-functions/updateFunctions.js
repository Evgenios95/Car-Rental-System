import Parse from "parse";
import axios from "axios";
import { getCarById } from "./individualBookingFunctions";
import {
  getBookingStatePointerForEdit,
  getCarPointer,
  getOfficePointer,
  getCarGroupPointer,
} from "./pointerFunctions";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
  ResultLabels,
} from "../constants/parse-labels";

export const updateCarInBooking = async (bookingId, id, navigate) => {
  const Booking = Parse.Object.extend(ClassnameLabels.booking);
  const query = new Parse.Query(Booking);
  const carPointer = await getCarPointer(id);
  try {
    const object = await query.get(bookingId);
    object.set(ColumnLabels.booking.carId, carPointer);
    try {
      const response = await object.save();
      console.log(ResultLabels.updateBooking, response);
      navigate(`/individual-booking/${bookingId}`);
    } catch (error) {
      console.error(ErrorLabels.updateBooking, error);
    }
  } catch (error) {
    console.error(ErrorLabels.getObjectById, error);
  }
};

export const chooseCar = async (carId, setChosenCar) => {
  await getCarById(carId, setChosenCar);
};

export const updateBooking = async (e, bookingId, formData, navigate) => {
  e.preventDefault();
  const pickupOfficePointer = await getOfficePointer(formData.pickUpOffice);
  const returnOfficePointer = await getOfficePointer(formData.returnOffice);
  const carGroupPointer = await getCarGroupPointer(formData.carGroup);
  const bookingStatePointer = await getBookingStatePointerForEdit(
    formData.bookingState
  );
  const Booking = Parse.Object.extend(ClassnameLabels.booking);
  const query = new Parse.Query(Booking);
  try {
    const object = await query.get(bookingId);
    object.set(
      ColumnLabels.booking.pickUpTime,
      new Date(formData.pickUpDate + " " + formData.pickUpTime)
    );
    object.set(ColumnLabels.booking.carGroup, carGroupPointer);
    object.set(ColumnLabels.booking.returnOffice, returnOfficePointer);
    object.set(ColumnLabels.booking.pickUpOffice, pickupOfficePointer);
    object.set(ColumnLabels.booking.bookingState, bookingStatePointer);
    object.set(
      ColumnLabels.booking.returnTime,
      new Date(formData.returnDate + " " + formData.returnTime)
    );
    try {
      const response = await object.save();
      console.log(ResultLabels.updateBooking, response);
      navigate(`/individual-booking/${bookingId}`);
    } catch (error) {
      console.error(ErrorLabels.updateBooking, error);
    }
  } catch (error) {
    console.error(ErrorLabels.getObjectById, error);
  }
};

export const updateCustomer = async (
  e,
  customerId,
  bookingId,
  formData,
  navigate
) => {
  e.preventDefault();
  const Customer = Parse.Object.extend(ClassnameLabels.customer);
  const query = new Parse.Query(Customer);
  try {
    const object = await query.get(customerId);
    object.set(ColumnLabels.customer.firstName, formData.firstName);
    object.set(ColumnLabels.customer.lastName, formData.lastName);
    object.set(ColumnLabels.customer.address, formData.address);
    object.set(ColumnLabels.customer.email, formData.email);
    object.set(ColumnLabels.customer.age, formData.age);
    object.set(ColumnLabels.customer.phoneNumber, formData.phoneNo);
    object.set(
      ColumnLabels.customer.driversLicenseNo,
      formData.driversLicenseNo
    );
    try {
      const response = await object.save();
      console.log(ResultLabels.updateCustomer, response);
      navigate(`/individual-booking/${bookingId}`);
    } catch (error) {
      console.error(ErrorLabels.updateCustomer, error);
    }
  } catch (error) {
    console.error(ErrorLabels.getCustomerObjectById, error);
  }
};

export const getCustomerByIdRest = async (customerId, setCustomer) => {
  const headers = {
    "X-Parse-Application-Id": process.env.REACT_APP_PARSE_APPLICATION_KEY,
    "X-Parse-REST-API-Key": process.env.REACT_APP_PARSE_REST_KEY,
    "Content-Type": "application/json",
  };

  try {
    axios
      .get(`https://parseapi.back4app.com/classes/Customer/${customerId}`, {
        headers: headers,
      })
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

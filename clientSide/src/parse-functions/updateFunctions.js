import Parse from "parse";
import { getCarPointer } from "./bookingComponentFunctions";
import { getCarById } from "./individualBookingFunctions";
import {
  getOfficePointer,
  getBookingStatePointerForEdit,
  getCarGroupPointer,
} from "./bookingComponentFunctions";

export const updateCarInBooking = async (bookingId, id, navigate) => {
  const Booking = Parse.Object.extend("Booking");
  const query = new Parse.Query(Booking);
  const carPointer = await getCarPointer(id);
  try {
    const object = await query.get(bookingId);
    object.set("carId", carPointer);
    try {
      const response = await object.save();
      console.log("Booking updated", response);
      navigate(`/individual-booking/${bookingId}`);
    } catch (error) {
      console.error("Error while updating Booking", error);
    }
  } catch (error) {
    console.error("Error while retrieving object Booking", error);
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
  console.log("pickuppointer", pickupOfficePointer);
  console.log("returnPointer", returnOfficePointer);
  console.log("bookingStatePointer", bookingStatePointer);
  console.log("carGroupPointer", carGroupPointer);
  const Booking = Parse.Object.extend("Booking");
  const query = new Parse.Query(Booking);
  try {
    const object = await query.get(bookingId);
    object.set(
      "pickUpTime",
      new Date(formData.pickUpDate + " " + formData.pickUpTime)
    );
    object.set("carGroup", carGroupPointer);
    object.set("returnOffice", returnOfficePointer);
    object.set("pickUpOffice", pickupOfficePointer);
    object.set("bookingState", bookingStatePointer);
    object.set(
      "returnTime",
      new Date(formData.returnDate + " " + formData.returnTime)
    );
    console.log("bookingObject", object);
    try {
      const response = await object.save();
      console.log("Booking updated", response);
      navigate(`/individual-booking/${bookingId}`);
    } catch (error) {
      console.error("Error while updating Booking", error);
    }
  } catch (error) {
    console.error("Error while retrieving object Booking", error);
  }
};

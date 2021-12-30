import { ColumnLabels } from "../text-labels/parse-labels";
import { ClassnameLabels } from "../text-labels/parse-labels";
import Parse from "parse";
import {
  getBookingStatePointerFinish,
  getCarStatePointer,
  getOfficePointer,
} from "../parse-functions/pointerFunctions";

export const setBookingStateToFinish = async (bookingId) => {
  const Booking = Parse.Object.extend(ClassnameLabels.booking);
  const query = new Parse.Query(Booking);
  const bookingStatePointer = await getBookingStatePointerFinish();

  try {
    const object = await query.get(bookingId);
    object.set(ColumnLabels.booking.bookingState, bookingStatePointer);
    try {
      const response = await object.save();
      console.log("Booking state updated", response);
    } catch (error) {
      console.log(error + " while updating booking to finish state");
    }
  } catch (error) {
    console.log(
      error + " while retrieveing Booking object when updating to finish state"
    );
  }
};

export const setParkingSlotAndRentalOfficeAndCarStateForCar = async (
  carId,
  parkingSlot,
  rentalOffice,
  carState
) => {
  console.log("rentalOffice in lang method", typeof rentalOffice);
  const Car = Parse.Object.extend(ClassnameLabels.car);
  const query = new Parse.Query(Car);
  const officePointer = await getOfficePointer(rentalOffice);
  const carStatePointer = await getCarStatePointer(carState);
  try {
    const object = await query.get(carId);
    object.set(ColumnLabels.car.parkingSlot, parkingSlot);
    object.set(ColumnLabels.car.rentalOffice, officePointer);
    object.set(ColumnLabels.car.state, carStatePointer);
    try {
      const response = await object.save();
      console.log(
        "Car parking slot, rental office and car state updated",
        response
      );
    } catch (error) {
      console.log(error + " while updating car object");
    }
  } catch (error) {
    console.log(error + " while retrieving car object when updating");
  }
};

export const changeParkingSlotWhenReturn = async (
  parkingSlot,
  officeNumber
) => {
  const ParkingSlot = Parse.Object.extend("ParkingSlot");
  const query = new Parse.Query(ParkingSlot);

  query.equalTo("officeNumber", officeNumber);
  try {
    const results = await query.find();
    for (const object of results) {
      const availableParkingSlots = object.get("availableParkingSlots");
      const occupiedParkingSlots = object.get("occupiedParkingSlots");
      const indexOfSlotAvailableSlot = availableParkingSlots.indexOf(
        parseInt(parkingSlot)
      );
      availableParkingSlots.splice(
        indexOfSlotAvailableSlot,
        indexOfSlotAvailableSlot
      );
      object.set("availableParkingSlots", availableParkingSlots);
      occupiedParkingSlots.push(parkingSlot);
      object.set("occupiedParkingSlots", occupiedParkingSlots);
      try {
        const response = await object.save();
        console.log("parking slots updated", response);
      } catch (error) {
        console.error("Error while updating parking slot", error);
      }
    }
  } catch (error) {
    console.error("Error while retrieving object parkingSLot", error);
  }
};

export const returnCar = async (
  bookingId,
  carId,
  carState,
  parkingSlot,
  rentalOffice,
  navigate
) => {
  await setBookingStateToFinish(bookingId);
  await setParkingSlotAndRentalOfficeAndCarStateForCar(
    carId,
    parkingSlot,
    rentalOffice,
    carState
  );
  await changeParkingSlotWhenReturn(parkingSlot, rentalOffice);
  navigate("/find-booking");
};

import Parse from "parse";
import { ClassnameLabels, ColumnLabels } from "../constants/parse-labels";
import {
  getOfficePointer,
  getCarStatePointer,
  getBookingStatePointerForEdit,
} from "./pointerFunctions";

export const pickUpcar = async (
  e,
  carId,
  parkingSlot,
  officeNumber,
  mileage,
  tankFull,
  bookingId,
  navigate
) => {
  e.preventDefault();
  await changeParkingSlotWhenPickUp(parkingSlot, officeNumber);
  await updateCarWhenPickUp(carId, mileage, tankFull);
  await updateBookingForPickUp(bookingId);
  alert("Car successfully picked up!");
  navigate("/booking-overview");
};

export const updateCarWhenPickUp = async (carId, mileage, tankFull) => {
  const Car = Parse.Object.extend(ClassnameLabels.car);
  const query = new Parse.Query(Car);
  const officePointer = await getOfficePointer("0");
  const carStatePointer = await getCarStatePointer("rented");

  try {
    const object = await query.get(carId);
    object.set(ColumnLabels.car.rentalOffice, officePointer);
    object.set(ColumnLabels.car.parkingSlot, 0);
    object.set(ColumnLabels.car.state, carStatePointer);
    object.set(ColumnLabels.car.mileage, mileage);
    object.set(ColumnLabels.car.tankFull, tankFull);
    try {
      const response = await object.save();
      console.log("Car updated when picked up", response);
    } catch (error) {
      console.error("Error while updating Car for pick up", error);
    }
  } catch (error) {
    console.error("Error while retrieving object Car", error);
  }
};

export const updateBookingForPickUp = async (bookingId) => {
  const Booking = Parse.Object.extend(ClassnameLabels.booking);
  const query = new Parse.Query(Booking);
  const bookingStatePointer = await getBookingStatePointerForEdit("active");

  try {
    const object = await query.get(bookingId);
    object.set(ColumnLabels.booking.bookingState, bookingStatePointer);

    try {
      const response = await object.save();
      console.log("Booking updated when picked up", response);
    } catch (error) {
      console.error("Error while updating Booking for pick up", error);
    }
  } catch (error) {
    console.error("Error while retrieving object Booking when pick up", error);
  }
};

export const changeParkingSlotWhenPickUp = async (
  parkingSlot,
  officeNumber
) => {
  const ParkingSlot = Parse.Object.extend(ClassnameLabels.parkingSlot);
  const query = new Parse.Query(ParkingSlot);

  query.equalTo(ColumnLabels.parkingSlot.officeNumber, officeNumber);
  try {
    const results = await query.find();
    for (const object of results) {
      const availableParkingSlots = object.get(
        ColumnLabels.parkingSlot.availableParkingSlots
      );
      const occupiedParkingSlots = object.get(
        ColumnLabels.parkingSlot.occupiedParkingSlots
      );
      const indexOfSlotsOccupied = occupiedParkingSlots.indexOf(
        parseInt(parkingSlot)
      );
      occupiedParkingSlots.splice(
        indexOfSlotsOccupied,
        indexOfSlotsOccupied + 1
      );
      object.set(
        ColumnLabels.parkingSlot.occupiedParkingSlots,
        occupiedParkingSlots
      );
      availableParkingSlots.push(parseInt(parkingSlot));
      object.set(
        ColumnLabels.parkingSlot.availableParkingSlots,
        availableParkingSlots
      );
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

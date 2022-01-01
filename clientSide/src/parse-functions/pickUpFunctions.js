import Parse from "parse";
import { useNavigate } from "react-router-dom";
import {
  getOfficePointer,
  getCarStatePointer,
  getBookingStatePointerForEdit,
} from "./pointerFunctions";
import { ClassnameLabels, ColumnLabels } from "../text-labels/parse-labels";

export const pickUpcar = async (
  carId,
  parkingSlot,
  officeNumber,
  bookingId,
  navigate
) => {
  await updateCarParkingSlot(carId);
  await changeParkingSlotWhenPickUp(parkingSlot, officeNumber);
  await updateBookingForPickUp(bookingId);
  navigate("/find-booking");
};

export const updateCarParkingSlot = async (carId) => {
  const Car = Parse.Object.extend(ClassnameLabels.car);
  const query = new Parse.Query(Car);
  const officePointer = await getOfficePointer("0");
  const carStatePointer = await getCarStatePointer("rented");
  try {
    const object = await query.get(carId);
    object.set(ColumnLabels.car.rentalOffice, officePointer);
    object.set(ColumnLabels.car.parkingSlot, 0);
    object.set(ColumnLabels.car.state, carStatePointer);
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
      occupiedParkingSlots.splice(indexOfSlotsOccupied, indexOfSlotsOccupied);
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

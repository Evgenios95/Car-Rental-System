import Parse from "parse";
import { useNavigate } from "react-router-dom";
import {
  getOfficePointer,
  getCarStatePointer,
  getBookingStatePointer,
} from "./pointerFunctions";

export const pickUpcar = async (carId, parkingSlot, officeNumber, navigate) => {
  await updateCarParkingSlot(carId);
  changeParkingSlotWhenPickUp(parkingSlot, officeNumber);
  navigate("/find-booking");
};

export const updateCarParkingSlot = async (carId) => {
  const Car = Parse.Object.extend("Car");
  const query = new Parse.Query(Car);
  const officePointer = await getOfficePointer("0");
  const carStatePointer = await getCarStatePointer("rented");
  try {
    const object = await query.get(carId);
    object.set("rentalOffice", officePointer);
    object.set("parkingSlot", 0);
    object.set("carState", carStatePointer);
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
export const updateBookingForPickUp = async (bookingId, bookingState) => {
  const Booking = Parse.Object.extend("Booking");
  const query = new Parse.Query(Booking);
  const bookingStatePointer = await getBookingStatePointer(bookingState);

  try {
    const object = await query.get(bookingId);
    object.set("bookingState", bookingStatePointer);

    try {
      const response = await object.save();
      console.log("Booking updated when picked up", response);
    } catch (error) {
      console.error("Error while updating Car for pick up", error);
    }
  } catch (error) {
    console.error("Error while retrieving object Car", error);
  }
};

export const changeParkingSlotWhenPickUp = async (
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
      const indexOfSlotsOccupied = occupiedParkingSlots.indexOf(
        parseInt(parkingSlot)
      );
      occupiedParkingSlots.splice(indexOfSlotsOccupied, indexOfSlotsOccupied);
      object.set("occupiedParkingSlots", occupiedParkingSlots);
      availableParkingSlots.push(parseInt(parkingSlot));
      object.set("availableParkingSlots", availableParkingSlots);
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

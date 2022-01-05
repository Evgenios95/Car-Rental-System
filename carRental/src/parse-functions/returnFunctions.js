import { ColumnLabels } from "../text-labels/parse-labels";
import { ClassnameLabels } from "../text-labels/parse-labels";
import Parse from "parse";
import {
  getBookingStatePointerFinish,
  getCarStatePointer,
  getOfficePointer,
  getCarPointer,
} from "../parse-functions/pointerFunctions";

export const setBookingStateToFinishAndAssignNoCar = async (bookingId) => {
  const Booking = Parse.Object.extend(ClassnameLabels.booking);
  const query = new Parse.Query(Booking);
  const bookingStatePointer = await getBookingStatePointerFinish();
  const carPointer = await getCarPointer("JDJAjsjElj");
  try {
    const object = await query.get(bookingId);
    object.set(ColumnLabels.booking.bookingState, bookingStatePointer);
    object.set("carId", carPointer);
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

export const setNewPropertiesForCar = async (
  carId,
  parkingSlot,
  mileage,
  rentalOffice,
  carState,
  tankFull
) => {
  const Car = Parse.Object.extend(ClassnameLabels.car);
  const query = new Parse.Query(Car);
  const officePointer = await getOfficePointer(rentalOffice);
  const carStatePointer = await getCarStatePointer(carState);
  try {
    const object = await query.get(carId);
    object.set(ColumnLabels.car.parkingSlot, parkingSlot);
    object.set(ColumnLabels.car.mileage, mileage);
    object.set(ColumnLabels.car.rentalOffice, officePointer);
    object.set(ColumnLabels.car.state, carStatePointer);
    object.set(ColumnLabels.car.tankFull, tankFull);
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

//This functions takes two parameters: the "officeNumber" the car is returned at and the "parkingSlot" the employee
//choose from the dropdown. The employee can choose parkingslots from an array in the database called
//"availableParkingSlots", that is set for the rentalOffice that is chosen.
// The function then takes the chosen parkingslot out of the array "availableParkingSlots",
//and put this parkingSlotNumber into the other array called "occupiedParkingSlots". It is done by
// initialising the arrays from the database, find the index for the chosen parkingSlot in "availableParkingSlots",
// remove this index and afterwards push the specific parkingSlot to "oocupiedParkingSlots"

export const changeParkingSlotWhenReturn = async (
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
      const indexOfSlotAvailableSlot = availableParkingSlots.indexOf(
        parseInt(parkingSlot)
      );
      availableParkingSlots.splice(
        indexOfSlotAvailableSlot,
        indexOfSlotAvailableSlot
      );
      object.set(
        ColumnLabels.parkingSlot.availableParkingSlots,
        availableParkingSlots
      );
      occupiedParkingSlots.push(parkingSlot);
      object.set(
        ColumnLabels.parkingSlot.occupiedParkingSlots,
        occupiedParkingSlots
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

export const returnCar = async (
  e,
  bookingId,
  carId,
  carState,
  parkingSlot,
  rentalOffice,
  mileage,
  tankFull,
  navigate
) => {
  e.preventDefault();
  await setBookingStateToFinishAndAssignNoCar(bookingId);
  await setNewPropertiesForCar(
    carId,
    parkingSlot,
    mileage,
    rentalOffice,
    carState,
    tankFull
  );
  await changeParkingSlotWhenReturn(parkingSlot, rentalOffice);

  navigate("/booking-overview");
};

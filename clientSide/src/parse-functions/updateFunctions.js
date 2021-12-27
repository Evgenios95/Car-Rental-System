import Parse from "parse";
import { getCarPointer } from "./bookingComponentFunctions";
import { getCarById } from "./individualBookingFunctions";

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

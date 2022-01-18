import Parse from "parse";
import {
  getOfficePointer,
  getBookingStatePointerForEdit,
} from "./pointerFunctions";

export const getBookingsWithState = async (formData, setNumberOfBookings) => {
  const office = await getOfficePointer(formData.rentalOffice);
  const bookingState = await getBookingStatePointerForEdit(
    formData.bookingState
  );
  const params = {
    rentalOffice: office,
    bookingState: bookingState,
  };
  try {
    const fetchBookings = await Parse.Cloud.run("bookings", params);
    setNumberOfBookings(fetchBookings);
  } catch (error) {
    console.log(error);
  }
};

export const getCarGroupsBooked = async (formData, setNumberOfCarGroups) => {
  const office = await getOfficePointer(formData.rentalOffice);
  const bookingState = await getBookingStatePointerForEdit("waiting");
  const params = {
    rentalOffice: office,
    bookingState: bookingState,
  };
  try {
    const fetchCargroups = await Parse.Cloud.run("carGroupBooked", params);
    setNumberOfCarGroups(fetchCargroups);
  } catch (error) {
    console.log(error);
  }
};

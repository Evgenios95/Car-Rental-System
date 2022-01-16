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

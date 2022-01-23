import Parse from "parse";
import {
  getOfficePointer,
  getBookingStatePointerForEdit,
  getCarStatePointer,
} from "./pointerFunctions";
import { CloudFunctionsLabels } from "../constants/general-labels";

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
    const fetchBookings = await Parse.Cloud.run(
      CloudFunctionsLabels.bookings,
      params
    );
    setNumberOfBookings(fetchBookings);
  } catch (error) {
    console.log(error);
  }
};

export const getBookedCarGroups = async (formData, setNumberOfCarGroups) => {
  const office = await getOfficePointer(formData.rentalOffice);
  const bookingState = await getBookingStatePointerForEdit("waiting");
  const params = {
    rentalOffice: office,
    bookingState: bookingState,
  };
  try {
    const fetchCargroups = await Parse.Cloud.run(
      CloudFunctionsLabels.carGroupBooked,
      params
    );
    setNumberOfCarGroups(fetchCargroups);
  } catch (error) {
    console.log(error);
  }
};

export const getCarGroupsParkingSpot = async (
  formData,
  setCarGroupsParkingSpot
) => {
  const office = await getOfficePointer(formData.rentalOffice);
  const carStateReady = await getCarStatePointer("ready");
  const carStateReturn = await getCarStatePointer("returned");
  const params = {
    rentalOffice: office,
    carStateReady: carStateReady,
    carStateReturn: carStateReturn,
  };
  try {
    const fetchCargroups = await Parse.Cloud.run(
      CloudFunctionsLabels.carGroupInParkingSpot,
      params
    );
    setCarGroupsParkingSpot(fetchCargroups);
  } catch (error) {
    console.log(error);
  }
};

export const getAlreadyRequested = async (formData, setAlreadyRequested) => {
  const office = await getOfficePointer(formData.rentalOffice);
  const params = {
    rentalOffice: office,
  };
  try {
    const fetchCargroups = await Parse.Cloud.run("getSendedRequests", params);
    setAlreadyRequested(fetchCargroups);
  } catch (error) {
    console.log(error);
  }
};

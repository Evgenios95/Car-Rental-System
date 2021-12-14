import Parse from "parse";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
} from "../text-labels/parse-labels";

export const setBookingOverviewElements = async (setError, setBookings) => {
  const Booking = Parse.Object.extend(ClassnameLabels.booking);
  const query = new Parse.Query(Booking);
  query.include(ColumnLabels.booking.customerId);
  query.include(ColumnLabels.booking.bookingState);
  query.include(ColumnLabels.booking.carGroup);
  query.include(ColumnLabels.booking.pickUpOffice);
  query.include(ColumnLabels.booking.returnOffice);
  const bookingArray = [];

  try {
    const results = await query.find();
    for (const object of results) {
      const bookingObject = {
        customerFirstName: object
          .get(ColumnLabels.booking.customerId)
          .get(ColumnLabels.customer.firstName),
        customerLastName: object
          .get(ColumnLabels.booking.customerId)
          .get(ColumnLabels.customer.lastName),
        customerDriversLicense: object
          .get(ColumnLabels.booking.customerId)
          .get(ColumnLabels.customer.driversLicenseNo),
        carGroup: object
          .get(ColumnLabels.booking.carGroup)
          .get(ColumnLabels.carGroup.name),
        pickUpOffice: object
          .get(ColumnLabels.booking.pickUpOffice)
          .get(ColumnLabels.rentalOffice.officeNo),
        pickUpTime: object.get(ColumnLabels.booking.pickUpTime),
        returnTime: object.get(ColumnLabels.booking.returnTime),
        bookingState: object
          .get(ColumnLabels.booking.bookingState)
          .get(ColumnLabels.bookingState),
      };
      bookingArray.push(bookingObject);
    }
    setBookings(bookingArray);
  } catch (error) {
    console.error(ErrorLabels.fetchBookings, error);
    setError(error);
  }
};

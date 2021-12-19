import Parse from "parse";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
} from "../text-labels/parse-labels";

export const setBookingOverviewElements = async (setError, setBookings) => {
  const Booking = Parse.Object.extend(ClassnameLabels.booking);
  const query = new Parse.Query(Booking);
  query.include("customerId");
  query.include("bookingState");
  query.include("carGroup");
  query.include("pickUpOffice");
  query.include("returnOffice");
  query.include("carId");
  const bookingArray = [];
  try {
    const results = await query.find();
    for (const object of results) {
      const bookingObject = {
        bookingId: object.id,
        customerFirstName: object.get("customerId").get("firstName"),
        customerLastName: object.get("customerId").get("lastName"),
        customerDriversLicense: object
          .get("customerId")
          .get("driversLicenseID"),
        carGroup: object.get("carGroup").get("name"),
        pickUpOffice: object.get("pickUpOffice").get("officeNumber"),
        pickUpTime: object.get("pickUpTime"),
        returnTime: object.get("returnTime"),
        bookingState: object.get("bookingState").get("state"),
        carLicenseNumber: object.get("carId").get("licenseNumber"),
      };

      bookingArray.push(bookingObject);
    }
    setBookings(bookingArray);
  } catch (error) {
    console.error(ErrorLabels.fetchBookings, error);
    setError(error);
  }
};

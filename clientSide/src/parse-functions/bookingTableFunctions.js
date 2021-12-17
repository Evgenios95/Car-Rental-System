import Parse from "parse";

export const setBookingOverviewElements = async (setError, setBookings) => {
  const Booking = Parse.Object.extend("Booking");
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
        bookingState: object.get("bookingState").get("bookingState"),
        carLicenseNumber: object.get("carId").get("licenseNumber"),
      };
      console.log(bookingObject);
      bookingArray.push(bookingObject);
    }
    setBookings(bookingArray);
  } catch (error) {
    console.error("Error while fetching bookings", error);
    setError(error);
  }
};

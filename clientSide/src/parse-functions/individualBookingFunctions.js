import Parse from "parse";

export const getBookingById = async (
  bookingId,
  setBooking,
  setCustomer,
  setCar
) => {
  const Booking = Parse.Object.extend("Booking");
  const query = new Parse.Query(Booking);

  query.equalTo("objectId", bookingId);
  query.include("carGroup");
  query.include("customerId");
  query.include("carId");
  query.include("carId.carState");
  query.include("carId.carGroup");
  query.include("pickUpOffice");
  query.include("returnOffice");
  query.include("bookingState");

  try {
    const result = await query.find();

    const bookingObject = {
      pickUpTime: result[0].get("pickUpTime").toString(),
      returnTime: result[0].get("returnTime").toString(),
      pickUpOffice: result[0].get("pickUpOffice").get("officeNumber"),
      returnOffice: result[0].get("returnOffice").get("officeNumber"),
      bookingState: result[0].get("bookingState").get("state"),
      carGroup: result[0].get("carGroup").get("name"),
      carId: result[0].get("carId").id,
      customerId: result[0].get("customerId").id,
    };
    const customerObject = {
      firstName: result[0].get("customerId").get("firstName"),
      lastName: result[0].get("customerId").get("lastName"),
      age: result[0].get("customerId").get("age"),
      address: result[0].get("customerId").get("address"),
      driversLicenseId: result[0].get("customerId").get("driversLicenseID"),
      eMail: result[0].get("customerId").get("email"),
      phoneNumber: result[0].get("customerId").get("phoneNumber"),
      customerId: result[0].get("customerId").id,
    };
    const carObject = {
      fuelType: result[0].get("carId").get("fuelType"),
      model: result[0].get("carId").get("model"),
      licensNumber: result[0].get("carId").get("licenseNumber"),
      color: result[0].get("carId").get("color"),
      carState: result[0].get("carId").get("carState").get("state"),
      carGroup: result[0].get("carId").get("carGroup").get("name"),
      parkingSlot: result[0].get("carId").get("parkingSlot"),
    };

    setBooking(bookingObject);
    setCustomer(customerObject);
    setCar(carObject);
  } catch (error) {
    console.error("Error while fetching Booking", error);
  }
};

export const getCarById = async (carId, setCar) => {
  const Car = Parse.Object.extend("Car");
  const query = new Parse.Query(Car);
  query.equalTo("objectId", carId);
  query.include("carGroup");
  query.include("carState");

  try {
    const result = await query.find();
    const carObject = {
      fuelType: result[0].get("fuelType"),
      model: result[0].get("model"),
      licensNumber: result[0].get("licenseNumber"),
      color: result[0].get("color"),
      carState: result[0].get("carState").get("state"),
      carGroup: result[0].get("carGroup").get("name"),
      parkingSlot: result[0].get("parkingSlot"),
    };
    setCar(carObject);
  } catch (error) {
    console.error("Error while fetching car", error);
  }
};

export const deleteBookingById = async (bookingId) => {
  const Booking = Parse.Object.extend("Booking");
  const query = new Parse.Query(Booking);
  try {
    const object = await query.get(bookingId);
    try {
      const response = await object.destroy();
      console.log("Deleted ParseObject", response);
    } catch (error) {
      console.error("Error while deleting ParseObject", error);
    }
  } catch (error) {
    console.error("Error while retrieving ParseObject", error);
  }
};

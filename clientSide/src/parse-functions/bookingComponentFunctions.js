import Parse from "parse";

export const getOfficePointer = async (officeInput) => {
  const RentalOffice = Parse.Object.extend("RentalOffice");
  const query = new Parse.Query(RentalOffice);
  query.equalTo("officeNumber", parseInt(officeInput));
  console.log(officeInput);
  try {
    const officeResult = await query.find();
    // console.log(officeResult[0]);
    return officeResult[0].toPointer();
  } catch (error) {
    console.error("Error while fetching RentalOffice", error);
  }
};

export const getBookingStatePointer = async () => {
  const bookingStateInDB = Parse.Object.extend("Bookingstate");
  const query = new Parse.Query(bookingStateInDB);
  query.equalTo("bookingState", "waiting");
  try {
    const currentBookingState = await query.find();
    return currentBookingState[0].toPointer();
  } catch (error) {
    console.error("Error while fetching bookingState", error);
  }
};

export const getCarGroupPointer = async (carGroupName) => {
  const CarGroup = Parse.Object.extend("CarGroup");
  const query = new Parse.Query(CarGroup);
  query.equalTo("name", carGroupName);
  try {
    const carGroupResult = await query.find();
    return carGroupResult[0].toPointer();
  } catch (error) {
    console.error("Error while fetching CarGroup", error);
  }
};

export const createCustomer = async (formData) => {
  const myNewObject = new Parse.Object("Customer");
  myNewObject.set("firstName", formData.firstName);
  myNewObject.set("lastName", formData.lastName);
  myNewObject.set("address", formData.address);
  myNewObject.set("email", formData.email);
  myNewObject.set("age", formData.age);
  myNewObject.set("phoneNumber", formData.phoneNo);
  myNewObject.set("driversLicenseID", formData.driversLicenseNo);
  try {
    const customer = await myNewObject.save();
    return customer.toPointer();
    // Access the Parse Object attributes using the .GET method
  } catch (error) {
    console.error("Error while creating Customer: ", error);
  }
};

export const createBooking = async (e, formData) => {
  e.preventDefault();
  const customerPointer = await createCustomer(formData);
  const pickupOfficePointer = await getOfficePointer(formData.pickUpOffice);
  const returnOfficePointer = await getOfficePointer(formData.returnOffice);
  const carGroupPointer = await getCarGroupPointer(formData.carGroup);
  const bookingStatePointer = await getBookingStatePointer();

  const myNewObject = new Parse.Object(ClassnameLabels.booking);
  myNewObject.set(
    ColumnLabels.booking.pickUpTime,
    new Date(formData.pickupDate)
  );
  myNewObject.set(
    ColumnLabels.booking.returnTime,
    new Date(formData.returnDate)
  );
  myNewObject.set(ColumnLabels.booking.customerId, customerPointer);
  myNewObject.set(ColumnLabels.booking.pickUpOffice, pickupOfficePointer);
  myNewObject.set(ColumnLabels.booking.returnOffice, returnOfficePointer);
  myNewObject.set(ColumnLabels.booking.carGroup, carGroupPointer);
  myNewObject.set(ColumnLabels.booking.bookingState, bookingStatePointer);
  myNewObject.set(ColumnLabels.booking.car, formData.car);
  try {
    const result = await myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log("Booking created", result);
  } catch (error) {
    console.error("Error while creating Booking: ", error);
  }
};

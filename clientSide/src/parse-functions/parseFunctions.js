import Parse from "parse";

//parse initializing function
export const initializeParse = async () => {
  Parse.initialize(
    process.env.REACT_APP_PARSE_APPLICATION_KEY,
    process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
  );

  Parse.serverURL = "https://parseapi.back4app.com/";
};

//Booking table helper function, find-booking page
export const setBookingOverviewElements = async (setError, setBookings) => {
  const Booking = Parse.Object.extend("Booking");
  const query = new Parse.Query(Booking);
  query.include("customerId");
  query.include("bookingState");
  query.include("carGroup");
  query.include("pickUpOffice");
  query.include("returnOffice");
  const bookingArray = [];

  try {
    const results = await query.find();
    console.log("result", results);
    for (const object of results) {
      const bookingObject = {
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
      };
      bookingArray.push(bookingObject);
    }
    setBookings(bookingArray);
  } catch (error) {
    console.error("Error while fetching bookings", error);
    setError(error);
  }
};

//This is for the dropdown component
export const setDropdownElements = async (type, attribute, setElements) => {
  const element = Parse.Object.extend(type);
  const query = new Parse.Query(element);
  //default value for dropdowns
  const elementArray = [];
  let filteredArray = (array) => array.filter((v, i) => array.indexOf(v) === i);
  try {
    const results = await query.find();
    for (const object of results) {
      const att = object.get(attribute);
      elementArray.push(att);
    }
    if (typeof elementArray[0] == "number") {
      elementArray.sort();
    }
    setElements(filteredArray(elementArray));
  } catch (error) {
    console.error("Error while fetching" + type, error);
  }
};

//The below are for the booking component
export const getOfficePointer = async (officeInput) => {
  const RentalOffice = Parse.Object.extend("RentalOffice");
  const query = new Parse.Query(RentalOffice);
  query.equalTo("officeNumber", parseInt(officeInput));
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

  const myNewObject = new Parse.Object("Booking");
  myNewObject.set("pickUpTime", new Date(formData.pickupDate));
  myNewObject.set("returnTime", new Date(formData.returnDate));
  myNewObject.set("customerId", customerPointer);
  myNewObject.set("pickUpOffice", pickupOfficePointer);
  myNewObject.set("returnOffice", returnOfficePointer);
  myNewObject.set("carGroup", carGroupPointer);
  myNewObject.set("bookingState", bookingStatePointer);
  try {
    const result = await myNewObject.save();
    // Access the Parse Object attributes using the .GET method
    console.log("Booking created", result);
  } catch (error) {
    console.error("Error while creating Booking: ", error);
  }
};

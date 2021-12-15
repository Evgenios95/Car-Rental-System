export const APILabels = {
  url: "https://parseapi.back4app.com/",
};

export const ClassnameLabels = {
  booking: "Booking",
  customer: "Customer",
  carGroup: "CarGroup",
  bookingState: "Bookingstate",
  rentalOffice: "RentalOffice",
  car: "Car",
};

export const ColumnLabels = {
  customer: {
    firstName: "firstName",
    lastName: "lastName",
    address: "address",
    email: "email",
    age: "age",
    phoneNumber: "phoneNumber",
    driversLicenseNo: "driversLicenseID",
  },
  booking: {
    pickUpTime: "pickUpTime",
    returnTime: "returnTime",
    customerId: "customerId",
    pickUpOffice: "pickUpOffice",
    returnOffice: "returnOffice",
    carGroup: "carGroup",
    bookingState: "bookingState",
    car: "car",
  },
  carGroup: {
    name: "name",
  },
  bookingState: "bookingState",
  rentalOffice: {
    officeNo: "officeNumber",
  },
  car: {
    group: "carGroup",
    rentalOffice: "rentalOffice",
    state: "carState",
    id: "objectId",
    model: "model",
    licenseNo: "licenseNumber",
    color: "color",
    fuel: "fuelType",
  },
  carState: "state",
};

export const ResultLabels = {
  booking: "Booking created",
};

export const ErrorLabels = {
  customer: "Error while creating Customer: ",
  booking: "Error while creating Booking: ",
  bookingState: "Error while fetching bookingState",
  carGroup: "Error while fetching CarGroup",
  rentalOffice: "Error while fetching RentalOffice",
  fetchBookings: "Error while fetching bookings",
  fetchCar: "Error while fetching Car",
  dropdown: "Error while fetching",
  login: "Error while logging in user",
  loginAlert: "Not a valid user",
};

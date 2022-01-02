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
  carState: "CarState",
  parkingSlot: "ParkingSlot",
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
    carId: "carId",
    id: "objectId",
  },
  carGroup: {
    name: "name",
    personCapacity: "personCapacity",
    smallLuggage: "smallLuggage",
    bigLuggage: "bigLuggage",
  },

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
    parkingSlot: "parkingSlot",
    tankFull: "tankFull",
    mileage: "mileage",
  },
  carState: "state",
  bookingState: {
    state: "state",
  },
  parkingSlot: {
    officeNumber: "officeNumber",
    availableParkingSlots: "availableParkingSlots",
    occupiedParkingSlots: "occupiedParkingSlots",
  },

  nestedPointers: {
    carIdAndState: "carId.carState",
    carIdAndGroup: "carId.carGroup",
  },
};

export const ResultLabels = {
  booking: "Booking created",
  deleteBooking: "Deleted Booking",
  updateBooking: "Booking updated",
  updateCustomer: "Customer updated",
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
  deleteBooking: "Error while deleting Booking",
  getObjectById: "Error while retrieving the object by id",
  getCustomerObjectById: "Error while retrieving object Customer",
  updateBooking: "Error while updating Booking",
  updateCustomer: "Error while updating Customer",
};

export const HardcodedFieldLabels = {
  car: "no car assigned",
  waiting: "waiting",
  finish: "finish",
  active: "active",
};

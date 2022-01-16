import Parse from "parse";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
  ResultLabels,
} from "../constants/parse-labels";

export const getBookingById = async (
  bookingId,
  setBooking,
  setCustomer,
  setCar
) => {
  const Booking = Parse.Object.extend(ClassnameLabels.booking);
  const query = new Parse.Query(Booking);

  query.equalTo(ColumnLabels.booking.id, bookingId);
  query.include(ColumnLabels.booking.carGroup);
  query.include(ColumnLabels.booking.customerId);
  query.include(ColumnLabels.booking.carId);
  query.include(ColumnLabels.nestedPointers.carIdAndState);
  query.include(ColumnLabels.nestedPointers.carIdAndGroup);
  query.include(ColumnLabels.nestedPointers.carIdAndRentalOffice);
  query.include(ColumnLabels.booking.pickUpOffice);
  query.include(ColumnLabels.booking.returnOffice);
  query.include(ColumnLabels.booking.bookingState);

  try {
    const result = await query.find();

    const bookingObject = {
      pickUpTime: result[0]
        .get(ColumnLabels.booking.pickUpTime)
        .toString()
        .substring(0, 21),
      returnTime: result[0]
        .get(ColumnLabels.booking.returnTime)
        .toString()
        .substring(0, 21),
      pickUpOffice: result[0]
        .get(ColumnLabels.booking.pickUpOffice)
        .get(ColumnLabels.rentalOffice.officeNo),
      returnOffice: result[0]
        .get(ColumnLabels.booking.returnOffice)
        .get(ColumnLabels.rentalOffice.officeNo),
      bookingState: result[0]
        .get(ColumnLabels.booking.bookingState)
        .get(ColumnLabels.bookingState.state),
      carGroup: result[0]
        .get(ColumnLabels.booking.carGroup)
        .get(ColumnLabels.carGroup.name),
      carId: result[0].get(ColumnLabels.booking.carId).id,
      customerId: result[0].get(ColumnLabels.booking.customerId).id,
    };
    const customerObject = {
      firstName: result[0]
        .get(ColumnLabels.booking.customerId)
        .get(ColumnLabels.customer.firstName),
      lastName: result[0]
        .get(ColumnLabels.booking.customerId)
        .get(ColumnLabels.customer.lastName),
      age: result[0]
        .get(ColumnLabels.booking.customerId)
        .get(ColumnLabels.customer.age),
      address: result[0]
        .get(ColumnLabels.booking.customerId)
        .get(ColumnLabels.customer.address),
      driversLicenseId: result[0]
        .get(ColumnLabels.booking.customerId)
        .get(ColumnLabels.customer.driversLicenseNo),
      eMail: result[0]
        .get(ColumnLabels.booking.customerId)
        .get(ColumnLabels.customer.email),
      phoneNumber: result[0]
        .get(ColumnLabels.booking.customerId)
        .get(ColumnLabels.customer.phoneNumber),
      customerId: result[0].get(ColumnLabels.booking.customerId).id,
    };
    const carObject = {
      fuelType: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.fuel),
      model: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.model),
      licensNumber: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.licenseNo),
      color: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.color),
      carState: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.state)
        .get(ColumnLabels.carState),
      carGroup: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.group)
        .get(ColumnLabels.carGroup.name),
      parkingSlot: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.parkingSlot),
      carId: result[0].get(ColumnLabels.booking.carId),
      tankFull: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.tankFull),
      mileage: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.mileage),
      personCapacity: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.group)
        .get(ColumnLabels.carGroup.personCapacity),
      smallLuggage: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.group)
        .get(ColumnLabels.carGroup.smallLuggage),
      bigLuggage: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.group)
        .get(ColumnLabels.carGroup.bigLuggage),
      rentalOffice: result[0]
        .get(ColumnLabels.booking.carId)
        .get(ColumnLabels.car.rentalOffice)
        .get(ColumnLabels.rentalOffice.officeNo),
    };

    setBooking(bookingObject);
    setCustomer(customerObject);
    setCar(carObject);
  } catch (error) {
    console.error(ErrorLabels.fetchBookings, error);
  }
};

export const getCarById = async (carId, setCar) => {
  const Car = Parse.Object.extend("Car");
  const query = new Parse.Query(Car);
  query.equalTo(ColumnLabels.car.id, carId);
  query.include(ColumnLabels.car.group);
  query.include(ColumnLabels.car.state);
  query.include(ColumnLabels.car.rentalOffice);

  try {
    const result = await query.find();
    const carObject = {
      fuelType: result[0].get(ColumnLabels.car.fuel),
      model: result[0].get(ColumnLabels.car.model),
      licensNumber: result[0].get(ColumnLabels.car.licenseNo),
      color: result[0].get(ColumnLabels.car.color),
      carState: result[0]
        .get(ColumnLabels.car.state)
        .get(ColumnLabels.carState),
      carGroup: result[0]
        .get(ColumnLabels.booking.carGroup)
        .get(ColumnLabels.carGroup.name),
      parkingSlot: result[0].get(ColumnLabels.car.parkingSlot),
      tankFull: result[0].get(ColumnLabels.car.tankFull),
      mileage: result[0].get(ColumnLabels.car.mileage),
      personCapacity: result[0]
        .get(ColumnLabels.car.group)
        .get(ColumnLabels.carGroup.personCapacity),
      smallLuggage: result[0]
        .get(ColumnLabels.car.group)
        .get(ColumnLabels.carGroup.smallLuggage),
      bigLuggage: result[0]
        .get(ColumnLabels.car.group)
        .get(ColumnLabels.carGroup.bigLuggage),
      carId: result[0].id,
      rentalOffice: result[0]
        .get(ColumnLabels.car.rentalOffice)
        .get(ColumnLabels.rentalOffice.officeNo),
    };
    setCar(carObject);
  } catch (error) {
    console.error(ErrorLabels.fetchCar, error);
  }
};

export const deleteBookingById = async (bookingId, navigate) => {
  const Booking = Parse.Object.extend(ClassnameLabels.booking);
  const query = new Parse.Query(Booking);
  try {
    const object = await query.get(bookingId);
    try {
      const response = await object.destroy();
      console.log(ResultLabels.deleteBooking, response);
      navigate("/booking-overview");
    } catch (error) {
      console.error(ErrorLabels.deleteBooking, error);
    }
  } catch (error) {
    console.error(ErrorLabels.getIdForDeletion, error);
  }
};

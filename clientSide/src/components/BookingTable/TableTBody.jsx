import Bookings from "./Bookings";

const TableTBody = ({ bookings, filteredBookings }) => {
  return (
    <tbody>
      {filteredBookings != 0 ? (
        <Bookings bookings={filteredBookings} />
      ) : (
        <Bookings bookings={bookings} />
      )}
    </tbody>
  );
};

export default TableTBody;

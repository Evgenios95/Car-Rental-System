import Bookings from "./Bookings";

const TableTBody = ({ bookings, filteredBookings, searchTerm }) => {
  return (
    <tbody>
      {searchTerm == "" ? (
        <Bookings bookings={bookings} />
      ) : (
        <Bookings bookings={filteredBookings} />
      )}
    </tbody>
  );
};

export default TableTBody;

import BookingTableData from "./BookingTableData";

const BookingTableTBody = ({ bookings, filteredBookings, searchTerm }) => {
  return (
    <tbody>
      {searchTerm == "" ? (
        <BookingTableData bookings={bookings} />
      ) : (
        <BookingTableData bookings={filteredBookings} />
      )}
    </tbody>
  );
};

export default BookingTableTBody;

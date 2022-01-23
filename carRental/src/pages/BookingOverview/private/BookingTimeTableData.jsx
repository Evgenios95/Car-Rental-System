const BookingTimeTableData = ({ bookingTime }) => {
  return <td>{bookingTime.substring(0, 21)}</td>;
};

export default BookingTimeTableData;

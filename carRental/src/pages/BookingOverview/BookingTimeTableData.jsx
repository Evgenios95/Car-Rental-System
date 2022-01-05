const BookingTimeTableData = ({ bookingTime }) => {
  return (
    <td>
      {bookingTime.getHours() +
        ":" +
        bookingTime.getMinutes() +
        bookingTime.getMinutes() +
        "\n" +
        bookingTime.getDate() +
        "/" +
        bookingTime.getMonth()}
    </td>
  );
};

export default BookingTimeTableData;

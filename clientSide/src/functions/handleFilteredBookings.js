export const handleFilteredBookings = (
  { target },
  setfilteredBookings,
  bookings
) => {
  //this example is about searching for the first name
  const searchTerm = target.value;
  const filtered = bookings.filter((booking) => {
    return booking.customerFirstName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
  setfilteredBookings(filtered);
};

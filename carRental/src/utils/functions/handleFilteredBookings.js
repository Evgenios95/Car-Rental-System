export const handleFilteredBookings = async (
  { target },
  setfilteredBookings,
  bookings,
  setSearchTerm
) => {
  //this example is about searching for the first name
  const searchValue = target.value;

  const filtered = bookings.filter((booking) => {
    return booking.customerLastName
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  setSearchTerm(searchValue);
  await setfilteredBookings(filtered);
};

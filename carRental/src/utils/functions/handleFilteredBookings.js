export const filterBookingsByDriversLicense = async (
  { target },
  setfilteredBookings,
  bookings,
  setSearchTerm
) => {
  const searchValue = target.value;

  const filtered = bookings.filter((booking) => {
    return booking.customerDriversLicense
      .toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  setSearchTerm(searchValue);
  await setfilteredBookings(filtered);
};

export const filterBookingsByLastName = async (
  { target },
  setfilteredBookings,
  bookings,
  setSearchTerm
) => {
  const searchValue = target.value;

  const filtered = bookings.filter((booking) => {
    return booking.customerLastName
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  setSearchTerm(searchValue);
  await setfilteredBookings(filtered);
};

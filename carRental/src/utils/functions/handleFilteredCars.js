export const filterCarsByRentalOffice = async (
  { target },
  setfilteredCars,
  cars,
  setSearchTerm
) => {
  const searchValue = target.value;

  const filtered = cars.filter((car) => {
    return car.rentalOffice
      .toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase());
  });

  setSearchTerm(searchValue);
  await setfilteredCars(filtered);
};

const TableTBody = ({ bookings }) => {
  return (
    <tbody>
      {bookings.map((b, i) => (
        <tr key={i}>
          <td>{b.customerFirstName}</td>
          <td>{b.customerLastName}</td>
          <td>{b.customerDriversLicense}</td>
          <td>{b.pickUpOffice}</td>
          <td>
            {b.pickUpTime.getHours() +
              ":" +
              b.pickUpTime.getMinutes() +
              b.pickUpTime.getMinutes() +
              "\n" +
              b.pickUpTime.getDate() +
              "/" +
              b.pickUpTime.getMonth()}
          </td>
          <td>
            {b.returnTime.getHours() +
              ":" +
              b.returnTime.getMinutes() +
              b.returnTime.getMinutes() +
              "\n" +
              b.returnTime.getDate() +
              "/" +
              b.returnTime.getMonth()}
          </td>
          <td>{b.carGroup}</td>
          <td>{b.bookingState}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableTBody;

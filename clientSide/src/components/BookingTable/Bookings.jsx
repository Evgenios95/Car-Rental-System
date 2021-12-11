import TimeTableData from "./TimeTableData";

const Bookings = ({ bookings }) => {
  return bookings.map((b, i) => (
    <tr key={i}>
      <td>{b.customerFirstName}</td>
      <td>{b.customerLastName}</td>
      <td>{b.customerDriversLicense}</td>
      <td>{b.pickUpOffice}</td>
      <TimeTableData bookingTime={b.pickUpTime} />
      <TimeTableData bookingTime={b.returnTime} />
      <td>{b.carGroup}</td>
      <td>{b.bookingState}</td>
    </tr>
  ));
};

export default Bookings;

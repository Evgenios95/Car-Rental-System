import React, { useState, useEffect } from "react";
import "./BookingTable.css";
import Parse from "parse";
import CRContainer from "../UiComponents/CRContainer";
import CRColumn from "../UiComponents/CRColumn";

const BookingTable = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const Booking = Parse.Object.extend("Booking");
      const query = new Parse.Query(Booking);
      query.include("customerId");
      query.include("bookingState");
      query.include("carGroup");
      query.include("pickUpOffice");
      query.include("returnOffice");
      const bookingArray = [];

      try {
        const results = await query.find();
        console.log("result", results);
        for (const object of results) {
          const bookingObject = {
            customerFirstName: object.get("customerId").get("firstName"),
            customerLastName: object.get("customerId").get("lastName"),
            customerDriversLicense: object
              .get("customerId")
              .get("driversLicenseID"),
            carGroup: object.get("carGroup").get("name"),
            pickUpOffice: object.get("pickUpOffice").get("officeNumber"),
            pickUpTime: object.get("pickUpTime"),
            returnTime: object.get("returnTime"),
            bookingState: object.get("bookingState").get("bookingState"),
          };
          bookingArray.push(bookingObject);
        }
        setBookings(bookingArray);
      } catch (error) {
        console.error("Error while fetching bookings", error);
        setError(error);
      }
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  if (error || !Array.isArray(bookings)) {
    return <p>There was an error loading your data!</p>;
  }
  return (
    <CRContainer>
      <CRColumn>
        <div className="overview-container">
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Drivers license</th>
                <th>Pick up office</th>
                <th>Pick up time</th>
                <th>Return time</th>
                <th>Car group</th>
                <th>Booking state</th>
              </tr>
            </thead>
            <tbody
              style={{
                overflowY: "auto",
                width: "100%",
                height: "300px",
                display: "block",
              }}
            >
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
          </table>
        </div>
      </CRColumn>
    </CRContainer>
  );
};
export default BookingTable;

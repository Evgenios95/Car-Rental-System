import React, { useState, useEffect } from "react";
import "./BookingTable.css";
import GrayContainer from "../UiComponents/GrayContainer";
import GrayColumn from "../UiComponents/GrayColumn";
import TableTHead from "./TableTHead";
import TableTBody from "./TableTBody";
import BookingOverviewTable from "./BookingOverviewTable";
import { setBookingOverviewElements } from "../../parse-functions/parseFunctions";
import NavBar from "../NavBar/Navbar";

const BookingTable = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState();

  useEffect(async () => {
    await setBookingOverviewElements(setError, setBookings);
    setLoading(false);
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  if (error || !Array.isArray(bookings)) {
    return <p>There was an error loading your data!</p>;
  }
  return (
    <>
      <NavBar />
      <GrayContainer>
        <GrayColumn>
          <BookingOverviewTable>
            <TableTHead />
            <TableTBody bookings={bookings} />
          </BookingOverviewTable>
        </GrayColumn>
      </GrayContainer>
    </>
  );
};
export default BookingTable;

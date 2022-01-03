import React, { useState, useEffect } from "react";
import "./BookingTable.css";
import GrayContainer from "../UiComponents/GrayContainer";
import GrayColumn from "../UiComponents/GrayColumn";
import TableTHead from "./TableTHead";
import TableTBody from "./TableTBody";
import BookingOverviewTable from "./BookingOverviewTable";
import NavBar from "../NavBar/Navbar";
import LabeledInput from "../LabeledInput/LabeledInput";
import { handleFilteredBookings } from "../../functions/handleFilteredBookings";
import { setBookingOverviewElements } from "../../parse-functions/bookingTableFunctions";

const BookingTable = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setfilteredBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
      <GrayContainer id="booking-container">
        <LabeledInput
          type="text"
          inputPlaceholder="Please search me"
          onChange={({ target }) =>
            handleFilteredBookings(
              { target },
              setfilteredBookings,
              bookings,
              setSearchTerm
            )
          }
          labelText="Search bar"
        />
        <GrayColumn>
          <BookingOverviewTable>
            <TableTHead />
            <TableTBody
              filteredBookings={filteredBookings}
              bookings={bookings}
              searchTerm={searchTerm}
            />
          </BookingOverviewTable>
        </GrayColumn>
      </GrayContainer>
    </>
  );
};
export default BookingTable;

import React, { useState, useEffect } from "react";
import "./BookingOverviewPage.css";
import GrayContainer from "../../components/Layout/GrayContainer";
import GrayColumn from "../../components/Layout/GrayColumn";
import BookingTableTHead from "./BookingTableTHead";
import BookingTableTBody from "./BookingTableTBody";
import BookingTable from "./BookingTable";
import NavBar from "../../components/NavBar/Navbar";
import LabeledInput from "../../components/LabeledInput/LabeledInput";
import { setBookingOverviewElements } from "../../utils/parse-functions/bookingTableFunctions";
import { handleFilteredBookings } from "../../utils/functions/handleFilteredBookings";
const BookingOverviewPage = () => {
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
          <BookingTable>
            <BookingTableTHead />
            <BookingTableTBody
              filteredBookings={filteredBookings}
              bookings={bookings}
              searchTerm={searchTerm}
            />
          </BookingTable>
        </GrayColumn>
      </GrayContainer>
    </>
  );
};
export default BookingOverviewPage;

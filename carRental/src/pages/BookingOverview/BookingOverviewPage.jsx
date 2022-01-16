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
import {
  filterBookingsByDriversLicense,
  filterBookingsByLastName,
} from "../../utils/functions/handleFilteredBookings";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const BookingOverviewPage = () => {
  const [loading, setLoading] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setfilteredBookings] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate();

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
      <GrayContainer className="title-container">
        <PageTitle ptitle="Booking Overview" />
      </GrayContainer>
      <GrayContainer className="booking-overview-gray-container">
        <LabeledInput
          type="text"
          className="booking-search-bar"
          inputPlaceholder="Last name..."
          labelText="Search by last name"
          onChange={({ target }) =>
            filterBookingsByLastName(
              { target },
              setfilteredBookings,
              bookings,
              setSearchTerm
            )
          }
        />
        <p className="search-or-text">or</p>
        <LabeledInput
          type="text"
          className="booking-search-bar"
          inputPlaceholder="Driver's license..."
          labelText="Search by license"
          onChange={({ target }) =>
            filterBookingsByDriversLicense(
              { target },
              setfilteredBookings,
              bookings,
              setSearchTerm
            )
          }
        />
        <Button
          btnText="Show Cloud Statistics"
          className="btn--primary show-statistics-btn"
          onClick={() => navigate("/bookings-per-rental-office")}
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

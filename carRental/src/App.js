import "./App.css";
import { Route, Routes } from "react-router";
import IndividualCarPage from "./pages/IndividualCar/IndividualCarPage";
import BookPage from "./pages/Book/BookPage";
import BookingOverviewPage from "./pages/BookingOverview/BookingOverviewPage";
import CarOverviewPage from "./pages/CarOverview/CarOverviewPage";
import EditBookingPage from "./pages/Edit/EditBooking/EditBookingPage";
import EditCustomerPage from "./pages/Edit/EditCustomer/EditCustomerPage";
import EditCarPage from "./pages/Edit/EditCar/EditCarPage";
import HomePage from "./pages/HomePage/HomePage";
import IndividualBookingPage from "./pages/IndividualBooking/IndividualBookingPage";
import LoginPage from "./pages/Login/LoginPage";
import PickUpCarPage from "./pages/PickUpCar/PickUpCarPage";
import ReturnCarPage from "./pages/ReturnCar/ReturnCarPage";
import AuthWrapper from "./utils/auth/AuthWrapper";
import BookingStatistics from "./pages/BookingStatistics/BookingStatisticsPage";
import RequestPage from "./pages/Request/RequestPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* Protected Routes */}
        <Route
          path="/book"
          element={
            <AuthWrapper>
              <BookPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/booking-overview"
          element={
            <AuthWrapper>
              <BookingOverviewPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/car-overview"
          element={
            <AuthWrapper>
              <CarOverviewPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/walkin-book"
          element={
            <AuthWrapper>
              <BookPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/bookings-per-rental-office"
          element={
            <AuthWrapper>
              <BookingStatistics />
            </AuthWrapper>
          }
        />
        {/* Dynamic paths */}
        <Route
          path="/individual-booking/:bookingId"
          element={
            <AuthWrapper>
              <IndividualBookingPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/edit-booking/:bookingId"
          element={
            <AuthWrapper>
              <EditBookingPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/edit-customer/:bookingId/:customerId"
          element={
            <AuthWrapper>
              <EditCustomerPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/edit-car/:bookingId/:carId"
          element={
            <AuthWrapper>
              <EditCarPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/cars/:id"
          element={
            <AuthWrapper>
              <IndividualCarPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/return-car/:bookingId/"
          element={
            <AuthWrapper>
              <ReturnCarPage />
            </AuthWrapper>
          }
        />
        <Route
          path="/pick-up-car/:bookingId/"
          element={
            <AuthWrapper>
              <PickUpCarPage />
            </AuthWrapper>
          }
        />

        <Route
          path="/request"
          element={
            <AuthWrapper>
              <RequestPage />
            </AuthWrapper>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

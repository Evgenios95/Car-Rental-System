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
import Statistics from "./pages/Statistics/Statistics";

function App() {
  return (
    <div className="App">
      {/* Don't touch the Routes, if we won't to render something to see it we can do 
        it on the /dummy route that I define and then in the element field place your component
        Whenever we add a complete component a new route will be created. Type the /dummy endpoint <3 */}
      <Routes>
        {/* Paths included in the navigation bar */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/booking-overview" element={<BookingOverviewPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/car-overview" element={<CarOverviewPage />} />
        {/* Conditional secondary paths */}
        <Route path="/walkin-book" element={<BookPage />} />
        {/* Dynamic paths */}
        <Route
          path="/individual-booking/:bookingId"
          element={<IndividualBookingPage />}
        />
        <Route path="/edit-booking/:bookingId" element={<EditBookingPage />} />
        <Route
          path="/edit-customer/:bookingId/:customerId"
          element={<EditCustomerPage />}
        />
        <Route path="/edit-car/:bookingId/:carId" element={<EditCarPage />} />
        <Route path="/cars/:id" element={<IndividualCarPage />} />
        <Route path="/return-car/:bookingId/" element={<ReturnCarPage />} />
        <Route path="/pick-up-car/:bookingId/" element={<PickUpCarPage />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </div>
  );
}

export default App;

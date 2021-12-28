import "./App.css";
import { Route, Routes } from "react-router";
import LoginComponent from "./components/Login/Login";
import BookingTable from "./components/BookingTable/BookingTable";
import StartingPage from "./components/StartingPage/StartingPage";
import BookingComponent from "./components/Booking/BookingComponent";
import CarTable from "./components/CarTable/CarTable";
import CarCard from "./components/CarCard/CarCard";
import IndividualBooking from "./components/IndividualBooking/IndividualBooking";
import EditBooking from "./components/Editing/EditBooking/EditBooking";
import EditCustomer from "./components/Editing/EditCustomer/EditCustomer";
import EditCar from "./components/Editing/EditCar/EditCar";
import ReturnCar from "./components/ReturnCar/ReturnCar";

function App() {
  return (
    <div className="App">
      {/* Don't touch the Routes, if we won't to render something to see it we can do 
        it on the /dummy route that I define and then in the element field place your component
        Whenever we add a complete component a new route will be created. Type the /dummy endpoint <3 */}
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/find-booking" element={<BookingTable />} />
        <Route path="/book" element={<BookingComponent />} />
        <Route
          path="/individual-booking/:bookingId"
          element={<IndividualBooking />}
        />
        <Route path="/edit-booking/:bookingId" element={<EditBooking />} />
        <Route
          path="/edit-customer/:bookingId/:customerId"
          element={<EditCustomer />}
        />
        <Route path="/edit-car/:bookingId/:carId" element={<EditCar />} />
        <Route path="/walkin-book" element={<BookingComponent />} />
        {/* Render your component below  */}
        <Route path="/dummy" element={"hey"} />
        <Route path="/car-table" element={<CarTable />} />
        <Route path="/cars/:id" element={<CarCard />} />
        <Route path="/return-car" element={<ReturnCar />} />
      </Routes>
    </div>
  );
}

export default App;

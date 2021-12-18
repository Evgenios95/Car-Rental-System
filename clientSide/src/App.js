import "./App.css";
import Parse from "parse";
import { Route, Routes } from "react-router";
import LoginComponent from "./components/Login/Login";
import BookingTable from "./components/BookingTable/BookingTable";
import StartingPage from "./components/StartingPage/StartingPage";
import BookingComponent from "./components/Booking/BookingComponent";
import IndividualBooking from "./components/IndividualBooking/IndividualBooking";

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
          path="/individualBooking/:bookingId"
          element={<IndividualBooking />}
        />
        {/* Render your component below  */}
        <Route path="/dummy" element={"hey"} />
      </Routes>
    </div>
  );
}

export default App;

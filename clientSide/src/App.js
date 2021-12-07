import "./App.css";
import Parse from "parse";
import { Route, Routes } from "react-router";
import LoginComponent from "./components/Login/Login";
import StartingPage from "./components/StartingPage/StartingPage";
import BookingComponent from "./components/Booking/BookingComponent";

Parse.initialize(
  process.env.REACT_APP_PARSE_APPLICATION_KEY,
  process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
);

Parse.serverURL = "https://parseapi.back4app.com/";

function App() {
  return (
    <div className="App">
      {/* Don't touch the Routes, if we won't to render something to see it we can do 
        it on the /dummy route that I define and then in the element field place your component
        Whenever we add a complete component a new route will be created. Type the /dummy endpoint <3 */}
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/book" element={<BookingComponent />} />
        {/* Render your component below  */}
        <Route path="/dummy" element={"here"} />
      </Routes>
    </div>
  );
}

export default App;

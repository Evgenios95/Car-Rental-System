import "./App.css";
import NavBar from "./components/NavBar/Navbar";
import LoginComponent from "./components/Login/Login";
import StartingPageImage from "./components/StartingPageImage/StartingPageImage";
import { Route, Routes } from "react-router";
import Parse from "parse";
import CrButton from "./components/Button/Button";
import PageTitle from "./components/PageTitle/PageTitle";
import { PageTitles } from "./text/text";
import { Navbar } from "react-bootstrap";

Parse.initialize(
  process.env.REACT_APP_PARSE_APPLICATION_KEY,
  process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
);

Parse.serverURL = "https://parseapi.back4app.com/";

console.log(process.env.REACT_APP_PARSE_APPLICATION_KEY);
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/book"
          element={<PageTitle ptitle={PageTitles.releaseCar} />}
        />
      </Routes>
    </div>
  );
}

export default App;

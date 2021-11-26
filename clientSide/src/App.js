import "./App.css";
import  NavBar  from "./components/NavBar/Navbar";
import LoginComponent from "./components/Login/Login"
import DropDown from "./components/DropDown/DropDown";
import {Route, Routes} from "react-router"
import Parse from "parse";

Parse.initialize(
  process.env.REACT_APP_PARSE_APPLICATION_KEY,
  process.env.REACT_APP_PARSE_JAVASCRIPT_KEY
);

Parse.serverURL = "https://parseapi.back4app.com/";

console.log(process.env.REACT_APP_PARSE_APPLICATION_KEY)
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element= {<DropDown type="cargroup" labeltext = "Car groups"/>} />   
        <Route path="/login" element= {<LoginComponent/>}/>   
      </Routes>
    </div>
  );
}

export default App;

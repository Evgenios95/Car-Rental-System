import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditBooking.css";
import GrayContainer from "../UiComponents/GrayContainer";
import GrayColumn from "../UiComponents/GrayColumn";
import LabeledInput from "../LabeledInput/LabeledInput";
import { useState } from "react";
import { onChangeHandler } from "../../functions/onChangeHandlers";
import DropDown from "../DropDown/DropDown";
import Button from "../Button/Button";
import NavBar from "../NavBar/Navbar";
import Parse from "parse";
import {
  getOfficePointer,
  getBookingStatePointer,
  getCarGroupPointer,
} from "../../parse-functions/bookingComponentFunctions";
import PageTitle from "../PageTitle/PageTitle";
const EditBooking = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState([]);
  console.log(bookingId);
  console.log(formData);

  const updateBooking = async (e, bookingId, formData, navigate) => {
    e.preventDefault();
    const pickupOfficePointer = await getOfficePointer(formData.pickUpOffice);
    const returnOfficePointer = await getOfficePointer(formData.returnOffice);
    const carGroupPointer = await getCarGroupPointer(formData.carGroup);
    const bookingStatePointer = await getBookingStatePointer(
      formData.bookingState
    );
    console.log("pickuppointer", pickupOfficePointer);
    console.log("returnPointer", returnOfficePointer);
    console.log("bookingStatePointer", bookingStatePointer);
    console.log("carGroupPointer", carGroupPointer);
    const Booking = Parse.Object.extend("Booking");
    const query = new Parse.Query(Booking);

    const object = await query.get(bookingId);
    object.set("pickUpTime", new Date(formData.pickUpDate));
    object.set("carGroup", carGroupPointer);
    object.set("returnOffice", returnOfficePointer);
    object.set("pickUpOffice", pickupOfficePointer);
    object.set("bookingState", bookingStatePointer);
    object.set("returnTime", new Date(formData.returnDate));
    console.log("bookingObject", object);

    try {
      const response = await object.save();
      console.log("Booking updated", response);
      navigate("/find-booking");
    } catch (error) {
      console.error("Error while updating Booking", error);
    }
    //   catch (error) {
    //   console.error("Error while retrieving object Booking", error);
    //   }
  };

  return (
    <>
      <NavBar />
      <PageTitle ptitle="Edit booking"></PageTitle>
      <form onSubmit={(e) => updateBooking(e, bookingId, formData, navigate)}>
        <GrayContainer>
          <GrayColumn>
            <LabeledInput
              labelText={"Pick-up date*"}
              type="date"
              onChange={(e) => onChangeHandler(e, "pickUpDate", setFormData)}
            ></LabeledInput>{" "}
            <LabeledInput
              labelText={"Pick-up time*"}
              type="time"
              onChange={(e) => onChangeHandler(e, "pickUpTime", setFormData)}
            ></LabeledInput>
            <LabeledInput
              labelText={"Return date*"}
              type="date"
              onChange={(e) => onChangeHandler(e, "returnDate", setFormData)}
            ></LabeledInput>
            <LabeledInput
              labelText={"Return time*"}
              type="time"
              onChange={(e) => onChangeHandler(e, "returnTime", setFormData)}
            ></LabeledInput>
            <DropDown
              type="CarGroup"
              labeltext="Car Group*"
              attribute="name"
              onChange={(e) => onChangeHandler(e, "carGroup", setFormData)}
            />
            <DropDown
              type="RentalOffice"
              labeltext="Pick up office*"
              attribute="officeNumber"
              onChange={(e) => onChangeHandler(e, "pickUpOffice", setFormData)}
            />
            <DropDown
              type="RentalOffice"
              labeltext="Return office*"
              onChange={(e) => onChangeHandler(e, "returnOffice", setFormData)}
              attribute="officeNumber"
            />
            <DropDown
              type="Bookingstate"
              labeltext="Booking state*"
              onChange={(e) => onChangeHandler(e, "bookingState", setFormData)}
              attribute="state"
            />
          </GrayColumn>
        </GrayContainer>
        <GrayContainer className="edit-booking-second-container">
          <Link to={`/individualBooking/${bookingId}`}>
            <Button type="submit" btnText="Go back" />
          </Link>
          <Button type="submit" btnText="Finish editing" />
        </GrayContainer>
      </form>
    </>
  );
};
export default EditBooking;

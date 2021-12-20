import NavBar from "../NavBar/Navbar";

import { useParams } from "react-router-dom";

const EditIndividualBooking = () => {
  const { bookingId } = useParams();
  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const [formData, setFormData] = useState([]);
  //   const [booking, setBooking] = useState({});
  //   const [customer, setCustomer] = useState({});
  //   const [car, setCar] = useState({});

  //   useEffect(async () => {
  // await getBookingById(bookingId, setBooking, setCustomer);
  //   }, []);
  //   useEffect(async () => {
  // await getCarById(booking.carId, setCar);
  //   }, [booking]);

  // const updateBooking = async (formData, navigate) => {
  // const Booking = Parse.Object.extend("Booking");
  // const query = new Parse.Query(Booking);
  // try {

  // const object = await query.get(bookingId);
  // object.set("customerId", new Parse.Object("Customer"));
  // object.set("pickUpOffice", new Parse.Object("RentalOffice"));
  // object.set("returnOffice", new Parse.Object("RentalOffice"));
  // object.set("returnTime", new Date());
  // object.set("pickUpTime", new Date());
  // object.set("bookingState", new Parse.Object("Bookingstate"));
  // object.set("carGroup", new Parse.Object("CarGroup"));
  // object.set("carId", new Parse.Object("Car"));
  // try {
  // const response = await object.save();

  // console.log("Booking updated", response);
  // } catch (error) {
  // console.error("Error while updating Booking", error);
  // }
  // } catch (error) {
  // console.error("Error while retrieving object Booking", error);
  // }
  // };
  console.log("jeg kan bruge params og navigate", bookingId);
  return (
    <>
      <NavBar />
    </>
  );
};

export default EditIndividualBooking;

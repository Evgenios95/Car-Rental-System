import { useParams } from "react-router-dom";
import NavBar from "../NavBar/Navbar";
import GrayContainer from "../UiComponents/GrayContainer";
import GrayColumn from "../UiComponents/GrayColumn";
import { useState } from "react";
import Parse from "parse";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import PageTitle from "../PageTitle/PageTitle";
import {
  TitleLabels,
  SubtitleLabels,
  NavigationLabels,
} from "../../text-labels/text-labels";
import Subtitle from "../Subtitle/Subtitle";

import {
  getBookingById,
  getCarById,
} from "../../parse-functions/individualBookingFunctions";
import Button from "../Button/Button";

const IndividualBooking = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState({});
  const [customer, setCustomer] = useState({});
  const [car, setCar] = useState({});
  console.log(bookingId);

  useEffect(async () => {
    await getBookingById(bookingId, setBooking, setCustomer);
  }, []);
  useEffect(async () => {
    await getCarById(booking.carId, setCar);
  }, [booking]);

  return (
    <>
      <NavBar />
      <PageTitle ptitle={TitleLabels.individualBooking} />
      <GrayContainer>
        <GrayColumn>
          <div>
            <Subtitle stitle={SubtitleLabels.bookingRecord} />
            <table>
              <thead>
                <tr>
                  <th>Pick up office</th>
                  <th>Return office</th>
                  <th>Pick up time</th>
                  <th>Return time</th>
                  <th>Car group</th>
                  <th>Booking state</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{booking.pickUpOffice}</td>
                  <td>{booking.returnOffice}</td>
                  <td>{booking.pickUpTime}</td>
                  <td>{booking.returnTime}</td>
                  <td>{booking.carGroup}</td>
                  <td>{booking.bookingState}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GrayColumn>
      </GrayContainer>
      <GrayContainer>
        <GrayColumn>
          <div>
            <Subtitle stitle={SubtitleLabels.customerRecord} />
            <table>
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Driver license</th>
                  <th>Phone number</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{customer.firstName}</td>
                  <td>{customer.lastName}</td>
                  <td>{customer.age}</td>
                  <td>{customer.address}</td>
                  <td>{customer.driversLicenseId}</td>
                  <td>{customer.phoneNumber}</td>
                  <td>{customer.eMail}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GrayColumn>
      </GrayContainer>

      <GrayContainer>
        <GrayColumn>
          <div>
            <Subtitle stitle={SubtitleLabels.carRecord} />
            <table>
              <thead>
                <tr>
                  <th>Model </th>
                  <th>Color</th>
                  <th>Fuel type</th>
                  <th>License number</th>
                  <th>Group</th>

                  <th>Parking slot</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{car.model}</td>
                  <td>{car.color}</td>
                  <td>{car.fuelType}</td>
                  <td>{car.licensNumber}</td>
                  <td>{car.carGroup}</td>
                  <td>{car.parkingSlot}</td>
                  <td>{car.carState}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </GrayColumn>
      </GrayContainer>

      <GrayContainer>
        <Link to={`/editIndividualBooking/${bookingId}`}>
          <Button type="button" btnText="Edit booking" />
        </Link>

        <Button
          type="button"
          btnText="Delete booking"
          btnBgColor="var(--global-red-55)"
          onClick={() =>
            navigate("/editIndividualBooking", {
              bookingId: bookingId,
            })
          }
        />

        <Button
          type="button"
          btnText="Pick up car"
          onClick={() =>
            navigate("/editIndividualBooking", {
              bookingId: bookingId,
            })
          }
        />
        <Button
          type="button"
          btnText="Return car"
          onClick={() =>
            navigate("/returnCar", {
              bookingId: bookingId,
            })
          }
        />
      </GrayContainer>
    </>
  );
};
export default IndividualBooking;

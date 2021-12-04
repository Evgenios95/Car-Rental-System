import CRColumn from "../../ui-components/CRColumn";
import CRContainer from "../../ui-components/CRContainer";
import CustomerInfo from "../Big components/CustomerInfo";
import ReturnCarComponent from "../Big components/ReturnCar";
import CrButton from "../Button/Button";
import PickUpCarComponent from "../Big components/PickUpCar";
import "./BookingComponent.css";

const BookingComponent = () => {
  return (
    <div>
      <form
        onSubmit={() => {
          console.log("helloooo");
        }}
      >
        <CRContainer>
          <CRColumn>
            <PickUpCarComponent />
          </CRColumn>
          <CRColumn>
            <ReturnCarComponent />
          </CRColumn>
          <CRColumn>
            <CustomerInfo />
          </CRColumn>
          <div></div>
        </CRContainer>
        <CRContainer className="booking">
          <CrButton type="submit" btnText="hello there" />
        </CRContainer>
      </form>
    </div>
  );
};

export default BookingComponent;

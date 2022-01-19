import { useNavigate, useParams, Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/Navbar";
import GrayColumn from "../../../components/Layout/GrayColumn";
import GrayContainer from "../../../components/Layout/GrayContainer";
import LabeledInput from "../../../components/LabeledInput/LabeledInput";
import { useState, useEffect } from "react";
import {
  CustomerInfoLabels,
  GeneralLabels,
  TitleLabels,
} from "../../../utils/constants/general-labels";
import PageTitle from "../../../components/PageTitle/PageTitle";
import "./EditCustomerPage.css";
import {
  updateCustomer,
  getCustomerById,
  getCustomerByIdRest,
} from "../../../utils/parse-functions/updateFunctions";
import {
  onChangeIntHandler,
  onChangeHandler,
} from "../../../utils/functions/onChangeHandlers";
import PopUpButton from "../../../components/PopUpButton/PopUpButton";

const EditCustomerPage = () => {
  const { bookingId, customerId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const [customer, setCustomer] = useState([]);

  useEffect(async () => {
    await getCustomerByIdRest(customerId, setCustomer);
  }, []);

  return (
    <>
      <NavBar />
      <PageTitle title={TitleLabels.editCustomer} />
      <form
        onSubmit={(e) =>
          updateCustomer(e, customerId, bookingId, formData, navigate)
        }
        id="edit-customer"
      >
        <GrayContainer>
          <GrayColumn>
            <div className="customer-info-container">
              <div>
                <LabeledInput
                  labelText={CustomerInfoLabels.firstName}
                  type="text"
                  defaultValue={customer.firstName}
                  onChange={(e) => onChangeHandler(e, "firstName", setFormData)}
                ></LabeledInput>
                <LabeledInput
                  labelText={CustomerInfoLabels.lastName}
                  type="text"
                  defaultValue={customer.lastName}
                  onChange={(e) => onChangeHandler(e, "lastName", setFormData)}
                ></LabeledInput>
              </div>
              <div>
                <LabeledInput
                  labelText={CustomerInfoLabels.age}
                  type="number"
                  defaultValue={customer.age}
                  onChange={(e) => onChangeIntHandler(e, "age", setFormData)}
                ></LabeledInput>
                <LabeledInput
                  labelText={CustomerInfoLabels.driversLicensNo}
                  type="text"
                  defaultValue={customer.driversLicenseID}
                  onChange={(e) =>
                    onChangeIntHandler(e, "driversLicenseNo", setFormData)
                  }
                ></LabeledInput>
              </div>
              <div>
                <LabeledInput
                  labelText={CustomerInfoLabels.address}
                  type="text"
                  defaultValue={customer.address}
                  onChange={(e) => onChangeHandler(e, "address", setFormData)}
                ></LabeledInput>
                <LabeledInput
                  labelText={CustomerInfoLabels.phoneNo}
                  type="tel"
                  defaultValue={customer.phoneNumber}
                  onChange={(e) =>
                    onChangeIntHandler(e, "phoneNo", setFormData)
                  }
                ></LabeledInput>
              </div>
              <div>
                <LabeledInput
                  labelText={CustomerInfoLabels.email}
                  type="email"
                  defaultValue={customer.email}
                  onChange={(e) => onChangeHandler(e, "email", setFormData)}
                ></LabeledInput>
              </div>
            </div>
          </GrayColumn>
        </GrayContainer>
        <GrayContainer className="edit-customer-second-container">
          <PopUpButton
            popupQuestion="Is the information correct? Finish editing?"
            popupBtnText="Finish Editing"
            btnClassName="btn--primary"
            form="edit-customer"
            confirmBtnText="Yes"
            rejectBtnText="No"
            confirmBtnType="submit"
          />

          <PopUpButton
            popupQuestion="Your current changes will be lost."
            popupBtnText="Go back"
            className="btn--white"
            confirmBtnText="Go back"
            rejectBtnText="Keep editing"
            onConfirmClick={() => navigate(`/individual-booking/${bookingId}`)}
          />
        </GrayContainer>
      </form>
    </>
  );
};
export default EditCustomerPage;

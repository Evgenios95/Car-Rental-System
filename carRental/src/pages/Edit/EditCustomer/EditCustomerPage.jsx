import { useNavigate, useParams, Link } from "react-router-dom";
import NavBar from "../../../components/NavBar/Navbar";
import GrayColumn from "../../../components/Layout/GrayColumn";
import GrayContainer from "../../../components/Layout/GrayContainer";
import LabeledInput from "../../../components/LabeledInput/LabeledInput";
import { useState } from "react";
import {
  CustomerInfoLabels,
  GeneralLabels,
} from "../../../utils/constants/general-labels";
import Button from "../../../components/Button/Button";
import PageTitle from "../../../components/PageTitle/PageTitle";
import "./EditCustomerPage.css";
import { updateCustomer } from "../../../utils/parse-functions/updateFunctions";
import {
  onChangeIntHandler,
  onChangeHandler,
} from "../../../utils/functions/onChangeHandlers";

const EditCustomerPage = () => {
  const { bookingId, customerId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState();

  return (
    <>
      <NavBar />
      <PageTitle ptitle="Edit customer"></PageTitle>
      <form
        onSubmit={(e) =>
          updateCustomer(e, customerId, bookingId, formData, navigate)
        }
      >
        <GrayContainer>
          <GrayColumn>
            <div className="customer-info-container">
              <div>
                <LabeledInput
                  labelText={CustomerInfoLabels.firstName}
                  type="text"
                  inputPlaceholder={GeneralLabels.placeholder}
                  onChange={(e) => onChangeHandler(e, "firstName", setFormData)}
                ></LabeledInput>
                <LabeledInput
                  labelText={CustomerInfoLabels.lastName}
                  type="text"
                  inputPlaceholder={GeneralLabels.placeholder}
                  onChange={(e) => onChangeHandler(e, "lastName", setFormData)}
                ></LabeledInput>
              </div>
              <div>
                <LabeledInput
                  labelText={CustomerInfoLabels.age}
                  type="number"
                  inputPlaceholder={GeneralLabels.placeholder}
                  onChange={(e) => onChangeIntHandler(e, "age", setFormData)}
                ></LabeledInput>
                <LabeledInput
                  labelText={CustomerInfoLabels.driversLicensNo}
                  type="text"
                  inputPlaceholder={GeneralLabels.placeholder}
                  onChange={(e) =>
                    onChangeIntHandler(e, "driversLicenseNo", setFormData)
                  }
                ></LabeledInput>
              </div>
              <div>
                <LabeledInput
                  labelText={CustomerInfoLabels.address}
                  type="text"
                  inputPlaceholder={GeneralLabels.placeholder}
                  onChange={(e) => onChangeHandler(e, "address", setFormData)}
                ></LabeledInput>
                <LabeledInput
                  labelText={CustomerInfoLabels.phoneNo}
                  type="tel"
                  inputPlaceholder={GeneralLabels.placeholder}
                  onChange={(e) =>
                    onChangeIntHandler(e, "phoneNo", setFormData)
                  }
                ></LabeledInput>
              </div>
              <div>
                <LabeledInput
                  labelText={CustomerInfoLabels.email}
                  type="email"
                  inputPlaceholder={GeneralLabels.placeholder}
                  onChange={(e) => onChangeHandler(e, "email", setFormData)}
                ></LabeledInput>
              </div>
            </div>
          </GrayColumn>
        </GrayContainer>
        <GrayContainer className="edit-customer-second-container">
          <Button
            btnText="Go back"
            onClick={() => navigate(`/individual-booking/${bookingId}`)}
          />
          <Button
            type="submit"
            className="btn--primary"
            btnText="Finish editing"
          />
        </GrayContainer>
      </form>
    </>
  );
};
export default EditCustomerPage;

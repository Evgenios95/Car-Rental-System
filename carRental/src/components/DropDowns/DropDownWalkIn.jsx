import "./DropDowns.css";
import { DropdownLabels } from "../../utils/constants/general-labels";

const DropDownWalkIn = ({ labeltext, onChange }) => {
  return (
    <div className="dropdown-container">
      <label className="dropdown-label" htmlFor="dropDown">
        {labeltext}
      </label>
      <select
        className="dropdown-select"
        id="dropDown"
        defaultValue=""
        onChange={onChange}
        required
      >
        <option disabled value="">
          {DropdownLabels.defaultOption}
        </option>
        <option>Now</option>
        <option>Later</option>
      </select>
    </div>
  );
};
export default DropDownWalkIn;

import "../DropDown/DropDown.css";
import { DropdownLabels } from "../../utils/constants/general-labels";

const DropDownWalkIn = ({ labeltext, onChange }) => {
  return (
    <div>
      <label className="label" htmlFor="dropDown">
        {labeltext}
      </label>
      <select
        className="drop"
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

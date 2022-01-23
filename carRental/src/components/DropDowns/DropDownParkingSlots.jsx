import "./DropDowns.css";
import React, { useEffect, useState } from "react";
import { DropdownLabels } from "../../utils/constants/general-labels";
import { fetchParkingSlots } from "../../utils/parse-functions/dropdownFunctions";

const DropDownParkingSlots = ({
  labeltext,
  type,
  attribute,
  onChange,
  returnData,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [parkingSlots, setParkingSlots] = useState([]);

  useEffect(async () => {
    await fetchParkingSlots(type, attribute, setParkingSlots, returnData);
    setLoading(false);
  }, [returnData]);

  if (isLoading) {
    return <div className="dropdown-loading">{DropdownLabels.loading}</div>;
  }

  return (
    <div>
      <label className="dropdown-label" htmlFor="dropDown">
        {labeltext}
      </label>
      <select
        className="dropdown-select"
        type={type}
        attribute={attribute}
        defaultValue=""
        onChange={onChange}
        required
      >
        <option disabled value="">
          {DropdownLabels.defaultOption}
        </option>
        {parkingSlots.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDownParkingSlots;

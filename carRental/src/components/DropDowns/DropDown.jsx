import "./DropDowns.css";
import React, { Fragment, useEffect, useState } from "react";
import { DropdownLabels } from "../../utils/constants/general-labels";
import { setDropdownElements } from "../../utils/parse-functions/dropdownFunctions";

const DropDown = ({
  labeltext,
  type,
  attribute,
  onChange,
  defaultValue,
  className,
  labelClassname,
  isTimeDropdown,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [elements, setElements] = useState([]);

  useEffect(async () => {
    await setDropdownElements(type, attribute, setElements);
    setLoading(false);
  }, []);

  if (isLoading) {
    return <div className="dropdown-loading">{DropdownLabels.loading}</div>;
  }

  const dropdownValue = location.pathname.includes("/edit-booking")
    ? defaultValue
    : "";

  return (
    <div className="dropdown-container">
      <label className={`dropdown-label ${labelClassname} `} htmlFor="dropDown">
        {labeltext}
      </label>
      <select
        defaultValue={dropdownValue}
        className={`dropdown-select ${className}`}
        id="dropDown"
        onChange={onChange}
        required
      >
        <option disabled value="">
          {DropdownLabels.defaultOption}
        </option>

        {isTimeDropdown && (
          <Fragment>
            <option>08:00</option>
            <option>10:00</option>
            <option>12:00</option>
            <option>14:00</option>
            <option>16:00</option>
            <option>18:00</option>
            <option>20:00</option>
          </Fragment>
        )}

        {elements.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;

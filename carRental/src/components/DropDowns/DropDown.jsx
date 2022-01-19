import "./DropDowns.css";
import React, { useEffect, useState } from "react";
import { DropdownLabels } from "../../utils/constants/general-labels";
import { setDropdownElements } from "../../utils/parse-functions/dropdownFunctions";

const DropDown = ({
  labeltext,
  type,
  attribute,
  onChange,
  className,
  labelClassname,
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

  return (
    <div>
      <label className={`dropdown-label ${labelClassname} `} htmlFor="dropDown">
        {labeltext}
      </label>
      <select
        className={`dropdown-select ${className}`}
        id="dropDown"
        defaultValue=""
        onChange={onChange}
        required
      >
        <option disabled value="">
          {DropdownLabels.defaultOption}
        </option>
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

import "./DropDown.css";
import React, { useEffect, useState } from "react";
import { DropdownLabels } from "../../text-labels/text-labels";
import { setDropdownElements } from "../../parse-functions/dropdownFunctions";

const DropDown = ({ labeltext, type, attribute, onChange }) => {
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
      <label className="label" htmlFor="dropDown">
        {labeltext}
      </label>
      <select
        className="drop"
        id="dropDown"
        defaultValue=""
        onChange={onChange}
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

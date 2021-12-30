import "../DropDown/DropDown.css";
import React, { useEffect, useState } from "react";
import { DropdownLabels } from "../../text-labels/text-labels";

import Parse from "parse";
import { ErrorLabels } from "../../text-labels/parse-labels";

const DropDownParkingSlots = ({
  labeltext,
  type,
  attribute,
  onChange,
  returnData,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [elements, setElements] = useState([]);

  useEffect(async () => {
    await retrieveElements(type, attribute, setElements, returnData);
    setLoading(false);
  }, [returnData]);

  const retrieveElements = async (type, attribute, setElements, returnData) => {
    const ParkingSlot = Parse.Object.extend("ParkingSlot");
    const query = new Parse.Query(ParkingSlot);
    const elementArray = [];
    query.equalTo("officeNumber", returnData.officeNumber);

    try {
      const result = await query.find();
      const att = result[0].get(attribute);
      for (const number of att) {
        elementArray.push(number);
      }
      elementArray.sort((a, b) => a - b);
      setElements(elementArray);
    } catch (error) {
      console.error(ErrorLabels.dropdown + type, error);
    }
  };

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
export default DropDownParkingSlots;

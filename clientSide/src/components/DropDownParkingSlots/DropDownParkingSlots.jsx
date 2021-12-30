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
  formData,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [elements, setElements] = useState([]);

  useEffect(async () => {
    await retrieveElements(type, attribute, setElements, formData);
    setLoading(false);
  }, [formData]);

  const retrieveElements = async (type, attribute, setElements, formData) => {
    const ParkingSlot = Parse.Object.extend("ParkingSlot");
    const query = new Parse.Query(ParkingSlot);
    //default value for dropdowns
    const elementArray = [];
    //let filteredArray = (array) => array.filter((v, i) => array.indexOf(v) === i);
    //query.include("parkingSlots");
    query.equalTo("officeNumber", parseInt(formData.officeNumber));

    try {
      const result = await query.find();
      console.log("result", result);

      const att = result[0].get(attribute);
      console.log("att", att);
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

import "../DropDown/DropDown.css";
import React, { useEffect, useState } from "react";
import { DropdownLabels } from "../../text-labels/text-labels";

import Parse from "parse";
import {
  ErrorLabels,
  ClassnameLabels,
  ColumnLabels,
} from "../../text-labels/parse-labels";

const DropDownParkingSlots = ({
  labeltext,
  type,
  attribute,
  onChange,
  formData,
}) => {
  const [isLoading, setLoading] = useState(true);
  const [parkingSlots, setParkingSlots] = useState([]);

  useEffect(async () => {
    await fetchParkingSlots(type, attribute, setParkingSlots, formData);
    setLoading(false);
  }, [formData]);

  const fetchParkingSlots = async (
    type,
    attribute,
    setParkingSlots,
    formData
  ) => {
    const ParkingSlot = Parse.Object.extend(ClassnameLabels.parkingSlot);
    const query = new Parse.Query(ParkingSlot);
    const parkingSlotArray = [];
    query.equalTo(ColumnLabels.parkingSlot.officeNumber, formData.officeNumber);

    try {
      const result = await query.find();
      const parkingSlotDatabase = result[0].get(attribute);
      for (const number of parkingSlotDatabase) {
        parkingSlotArray.push(number);
      }
      parkingSlotArray.sort((a, b) => a - b);
      setParkingSlots(parkingSlotArray);
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
      <select className="drop" defaultValue="" onChange={onChange} required>
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

import "./DropDowns.css";
import React, { useEffect, useState } from "react";
import { DropdownLabels } from "../../utils/constants/general-labels";

import Parse from "parse";
import {
  ErrorLabels,
  ClassnameLabels,
  ColumnLabels,
} from "../../utils/constants/parse-labels";
ColumnLabels;

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

  const fetchParkingSlots = async (
    type,
    attribute,
    setParkingSlots,
    returnData
  ) => {
    const ParkingSlot = Parse.Object.extend(ClassnameLabels.parkingSlot);
    const query = new Parse.Query(ParkingSlot);
    const parkingSlotArray = [];
    query.equalTo(
      ColumnLabels.parkingSlot.officeNumber,
      returnData.officeNumber
    );

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
      <label className="dropdown-label" htmlFor="dropDown">
        {labeltext}
      </label>
      <select
        className="dropdown-select"
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

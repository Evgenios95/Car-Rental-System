import Parse from "parse";
import {
  ErrorLabels,
  ClassnameLabels,
  ColumnLabels,
} from "../constants/parse-labels";

export const setDropdownElements = async (type, attribute, setElements) => {
  const element = Parse.Object.extend(type);
  const query = new Parse.Query(element);

  const elementArray = [];
  let filteredArray = (array) => array.filter((v, i) => array.indexOf(v) === i);
  try {
    const results = await query.find();
    for (const object of results) {
      const att = object.get(attribute);

      if (att != "-" && att != 0 && att != "0") {
        elementArray.push(att);
      }
    }
    if (typeof elementArray[0] == "number") {
      elementArray.sort((a, b) => a - b);
    }
    setElements(filteredArray(elementArray));
  } catch (error) {
    console.error(ErrorLabels.dropdown + type, error);
  }
};

export const fetchParkingSlots = async (
  type,
  attribute,
  setParkingSlots,
  returnData
) => {
  const ParkingSlot = Parse.Object.extend(ClassnameLabels.parkingSlot);
  const query = new Parse.Query(ParkingSlot);
  const parkingSlotArray = [];
  query.equalTo(ColumnLabels.parkingSlot.officeNumber, returnData.officeNumber);

  try {
    const result = await query.find();
    const parkingSlotDatabase = result[0].get(attribute);
    for (const number of parkingSlotDatabase) {
      parkingSlotArray.push(number);
    }
    parkingSlotArray.sort((a, b) => a - b);
    await setParkingSlots(parkingSlotArray);
  } catch (error) {
    console.error(ErrorLabels.dropdown + type, error);
  }
};

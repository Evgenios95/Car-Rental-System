import Parse from "parse";
import { ErrorLabels } from "../text-labels/parse-labels";

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

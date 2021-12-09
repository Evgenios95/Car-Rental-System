import Parse from "parse";

export const setDropdownElements = async (type, attribute, setElements) => {
  const element = Parse.Object.extend(type);
  const query = new Parse.Query(element);
  //default value for dropdowns
  const elementArray = [];
  let filteredArray = (array) => array.filter((v, i) => array.indexOf(v) === i);
  try {
    const results = await query.find();
    for (const object of results) {
      const att = object.get(attribute);
      elementArray.push(att);
    }
    if (typeof elementArray[0] == "number") {
      elementArray.sort();
    }
    setElements(filteredArray(elementArray));
  } catch (error) {
    console.error("Error while fetching" + type, error);
  }
};

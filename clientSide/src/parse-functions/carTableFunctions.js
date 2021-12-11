export const setCarElements = async ({ setCars, setError }) => {
  const Car = Parse.Object.extend("Car");
  const query = new Parse.Query(Car);
  query.include("carGroup");
  query.include("rentalOffice");
  query.include("carState");
  query.include("objectId");
  const carArray = [];

  try {
    const results = await query.find();
    for (const object of results) {
      const carObject = {
        carGroup: object.get("carGroup").get("name"),
        model: object.get("model"),
        licenseNumber: object.get("licenseNumber"),
        color: object.get("color"),
        fuelType: object.get("fuelType"),
        carState: object.get("carState").get("state"),
        rentalOffice: object.get("rentalOffice").get("officeNumber"),
      };
      console.log(carObject.licenseNumber);
      carArray.push(carObject);
    }
    setCars(carArray);
  } catch (error) {
    console.error("Error while fetching Car", error);
    setError(error);
  }
};

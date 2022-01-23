import Parse from "parse";
import {
  ClassnameLabels,
  ColumnLabels,
  ErrorLabels,
} from "../constants/parse-labels";
import {
  getOfficePointer,
  getCarGroupPointer,
} from "../parse-functions/pointerFunctions";

export const getAllRequests = async (setRequests) => {
  const Request = Parse.Object.extend(ClassnameLabels.request);
  const query = new Parse.Query(Request);
  query.include(ColumnLabels.request.rentalOffice);
  query.include(ColumnLabels.request.carGroup);
  query.equalTo(ColumnLabels.request.resolved, "no");
  const requestArray = [];
  try {
    const results = await query.find();

    for (const object of results) {
      const requestObject = {
        rentalOffice: object
          .get(ColumnLabels.request.rentalOffice)
          .get(ColumnLabels.rentalOffice.officeNo),
        carGroup: object
          .get(ColumnLabels.request.carGroup)
          .get(ColumnLabels.carGroup.name),
        deliveryDate: object
          .get(ColumnLabels.request.deliveryDate)
          .toString()
          .substring(0, 16),
        resolved: object.get(ColumnLabels.request.resolved),
        requestId: object.id,
      };
      requestArray.push(requestObject);
    }
    setRequests(requestArray);
  } catch (error) {
    console.error(ErrorLabels.request, error);
  }
};

export const chooseRequest = (request, chosenRequest, setChosenRequest) => {
  if (!chosenRequest.includes(request)) {
    setChosenRequest((oldArray) => [...oldArray, request]);
  }
};

export const unSelectRequest = (request, chosenRequest, setChosenRequest) => {
  const filteredArray = chosenRequest.filter(function (r) {
    return r.requestId !== request.requestId;
  });
  setChosenRequest(filteredArray);
};

export const createAllReleaseObjects = async (chosenRequest, formData) => {
  let sum = 0;
  if (formData.rentalOffice === undefined) {
    alert("You need to choose a rental office on top of the page!");
  } else {
    try {
      for (const requestObject of chosenRequest) {
        await createReleaseObject(requestObject, formData);
        sum += 1;
      }
    } catch (error) {
      console.log("Error while creating release objects", error);
    }
    window.location.reload(true);
    alert(`You have succesfully released ${sum} car(s)!`);
  }
};
export const createReleaseObject = async (requestObject, formData) => {
  const carGroupPointer = await getCarGroupPointer(requestObject.carGroup);
  const releasingOffice = await getOfficePointer(formData.rentalOffice);
  const requestingOffice = await getOfficePointer(requestObject.rentalOffice);
  const object = new Parse.Object(ClassnameLabels.releases);
  object.set(ColumnLabels.releases.carGroup, carGroupPointer);
  object.set(
    ColumnLabels.releases.deliveryDate,
    new Date(requestObject.deliveryDate)
  );
  object.set(ColumnLabels.releases.releasingOffice, releasingOffice);
  object.set(ColumnLabels.releases.requestingOffice, requestingOffice);
  try {
    const result = await object.save();
    await updateRequestAfterRelease(requestObject.requestId);

    console.log("Releases created", result);
  } catch (error) {
    console.error("Error while creating Releases: ", error);
  }
};

export const updateRequestAfterRelease = async (requestId) => {
  const query = new Parse.Query(ClassnameLabels.request);
  try {
    const object = await query.get(requestId);
    object.set(ColumnLabels.request.resolved, "yes");
    try {
      const response = await object.save();
      console.log(response.get("resolved"));
      console.log("Request updated", response);
    } catch (error) {
      console.error("Error while updating Request", error);
    }
  } catch (error) {
    console.error("Error while retrieving object Request", error);
  }
};

export const createRequest = async (formData) => {
  const object = new Parse.Object(ClassnameLabels.request);
  const officePointer = await getOfficePointer(formData.rentalOffice);
  const carGrouppointer = await getCarGroupPointer(formData.carGroup);
  object.set(ColumnLabels.request.rentalOffice, officePointer);
  object.set(ColumnLabels.request.carGroup, carGrouppointer);
  object.set(ColumnLabels.request.deliveryDate, new Date(formData.date));
  object.set(ColumnLabels.request.resolved, "no");
  try {
    const result = await object.save();
    console.log("Request created", result);
  } catch (error) {
    console.error("Error while creating Request: ", error);
  }
};

export const sendAllChosenRequests = async (formData) => {
  if (
    formData.date != undefined &&
    formData.carGroup != undefined &&
    formData.rentalOffice != undefined &&
    formData.number > 0
  ) {
    for (let i = 0; i < formData.number; ++i) {
      try {
        await createRequest(formData);
      } catch (error) {
        console.log("Error while sending all chosen requests", error);
      }
    }
    alert(`You have succesfully send a request for ${formData.number} car(s)!`);
  } else {
    alert(
      "You need to fill out all fields: date, rental office, amount and car group before sending the request."
    );
  }
};

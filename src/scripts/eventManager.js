const handleDelete = () => {
  console.log(
    "delete button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  deletePark(parkId).then(() => listNationalParks());
};

const handleDeleteMonument = () => {
  let monumentId = event.target.id.split("--")[1];

  deleteMonument(monumentId)
  .then(() => listMonuments())
};

const handleVisited = () => {
  console.log(
    "visited button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  let visitedParkObject = {
    visited: true
  };

  patchPark(parkId, visitedParkObject).then(() => listNationalParks());
};

const handleEdit = () => {
  console.log("edit button clicked", event.target.parentNode.id.split("--")[1]);
  let parkId = event.target.parentNode.id.split("--")[1];

  const parkArticle = document.querySelector(`#national-park--${parkId}`);
  clearElement(parkArticle);

  getPark(parkId).then(parkToEdit => {
    const editFormForPark = parkEditForm(parkToEdit);
    parkArticle.appendChild(editFormForPark);
  });
};
const handleMonumentEdit = () => {
  let monumentId = event.target.parentNode.id.split('--')[1];

  const monumentArticle = document.querySelector(`#national-monument--${monumentId}`);
  clearElement(monumentArticle);

  getMonument(monumentId).then(monumentToEdit => {
    const editMonumentForm = monumentForm(monumentToEdit);
    monumentArticle.appendChild(editMonumentForm);
  })
}

const handleUpdate = () => {
  console.log(
    "update button clicked",
    event.target.parentNode.id.split("--")[1]
  );
  let parkId = event.target.parentNode.id.split("--")[1];

  const editedParkName = document.querySelector(`#edit-park-name--${parkId}`);
  const editedParkState = document.querySelector(`#edit-park-state--${parkId}`);
  const editedParkLongitude = document.querySelector(`#edit-park-longitude--${parkId}`);
  const editedParkLatitude = document.querySelector(`#edit-park-latitude--${parkId}`);
  let radioValue = document.querySelector('input[name = "visited"]:checked').value;

  let boolRadioValue = (radioValue === "true")

  console.log(editedParkName.value, editedParkState.value, editedParkLongitude.value, editedParkLatitude.value);
  let editedPark = {
    name: editedParkName.value,
    state: editedParkState.value,
    latitude: editedParkLatitude.value,
    longitude: editedParkLongitude.value,
    visited: boolRadioValue
  };

  putPark(parkId, editedPark).then(() => listNationalParks());
};
const handleMonumentUpdate = () => {
  let monumentId = event.target.parentNode.id.split('--')[1];

  const editMonumentName = document.querySelector(`#edit-monument-name--${monumentId}`);
  const editMonumentState = document.querySelector(`#edit-monument-state--${monumentId}`);
  const editMonumentArea = document.querySelector(`#edit-monument-area--${monumentId}`);

  let updatedMonument = {
    name: editMonumentName.value,
    state: editMonumentState.value,
    area: editMonumentArea.value
  };

  putMonument(monumentId, updatedMonument).then(() => listMonuments());
}


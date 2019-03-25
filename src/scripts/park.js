const buildParkHtml = parkObject => {
  // <article>
  //  <h3>Park Name</h3>
  //  <p>State the park in located in</p>
  // </article>

  const parkArticle = buildElement("article", `national-park--${parkObject.id}`);
  parkArticle.appendChild(buildElement("h3", undefined, parkObject.name));
  parkArticle.appendChild(buildElement("p", undefined, parkObject.state));

  if(parkObject.visited !== true) {
    let visitedParkButton = buildElement("button", undefined, "Visited Park")
    parkArticle.appendChild(visitedParkButton);
    visitedParkButton.addEventListener("click", handleVisited)
  }

  let editParkButton = buildElement("button", undefined, "Edit Park")
  parkArticle.appendChild(editParkButton);
  editParkButton.addEventListener("click", handleEdit)

  let deleteParkButton = buildElement("button", undefined, "Delete Park")
  parkArticle.appendChild(deleteParkButton);
  deleteParkButton.addEventListener("click", handleDelete)
  return parkArticle;
};

const parkEditForm = (parkObject) => {
  let editFormFragment = document.createDocumentFragment()

  editFormFragment.appendChild(buildElement("label", undefined, "Name: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-name--${parkObject.id}`, undefined, parkObject.name))

  editFormFragment.appendChild(buildElement("label", undefined, "State: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-state--${parkObject.id}`, undefined, parkObject.state))
  
  editFormFragment.appendChild(buildElement("label", undefined, "Longitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-longitude--${parkObject.id}`, undefined, parkObject.longitude))
  
  editFormFragment.appendChild(buildElement("label", undefined, "Latitude: "))
  editFormFragment.appendChild(buildElement("input", `edit-park-latitude--${parkObject.id}`, undefined, parkObject.latitude))

  let radioFalse = buildElement("input", `edit-park-visitFalse--${parkObject.id}`, "False")
  let labelFalse = buildElement("label", undefined, "False: ")
  labelFalse.htmlFor = "visited";
  radioFalse.type = "radio";
  radioFalse.name = "visited"
  radioFalse.value = false;
  radioFalse.checked = true;

  let radioTrue = buildElement("input", `edit-park-visitTrue--${parkObject.id}`, "True")
  let labelTrue = buildElement("label", undefined, "True: ")
  labelTrue.htmlFor = "visited";
  radioTrue.type = "radio";
  radioTrue.name = "visited";
  radioTrue.value = true;


  editFormFragment.appendChild(radioFalse)
  editFormFragment.appendChild(labelFalse)

  editFormFragment.appendChild(radioTrue)
  editFormFragment.appendChild(labelTrue)


  const updateParkButton = buildElement("button", undefined, "Update")
  updateParkButton.addEventListener("click", handleUpdate)
  editFormFragment.appendChild(updateParkButton)

  return editFormFragment
}



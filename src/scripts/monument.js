const buildMonumentHtml = mObject => {

    const mArticle = buildElement("article", `national-monument--${mObject.id}`);
    mArticle.appendChild(buildElement("h3", undefined, mObject.name));
    mArticle.appendChild(buildElement("p", undefined, mObject.state));
  
    let deleteMbutton = buildElement("button", `delete-monument--${mObject.id}`, "Delete Monument")
    mArticle.appendChild(deleteMbutton);
    deleteMbutton.addEventListener("click", handleDeleteMonument)

    let editMonumentButton = buildElement("button", `edit-monument--${mObject.id}`, "Edit Monument");
    mArticle.appendChild(editMonumentButton);
    editMonumentButton.addEventListener("click", handleMonumentEdit);

    return mArticle;
  };

  const monumentForm = monumentObject => {
    let docFrag = document.createDocumentFragment();

    docFrag.appendChild(buildElement("label", undefined, "Name: "));
    docFrag.appendChild(buildElement("input", `edit-monument-name--${monumentObject.id}`, undefined, monumentObject.name));

    docFrag.appendChild(buildElement("label", undefined, "State: "));
    docFrag.appendChild(buildElement("input", `edit-monument-state--${monumentObject.id}`, undefined, monumentObject.state));

    docFrag.appendChild(buildElement("label", undefined, "Area: "));
    docFrag.appendChild(buildElement("input", `edit-monument-area--${monumentObject.id}`, undefined, monumentObject.area));

    const updateMonument = buildElement("button", undefined, "Update");
    updateMonument.addEventListener("click", handleMonumentUpdate);
    docFrag.appendChild(updateMonument);

    return docFrag;
  }
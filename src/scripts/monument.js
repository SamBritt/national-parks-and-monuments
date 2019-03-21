const buildMonumentHtml = mObject => {

    const mArticle = buildElement("article");
    mArticle.appendChild(buildElement("h3", undefined, mObject.name));
    mArticle.appendChild(buildElement("p", undefined, mObject.state));
  
    let deleteMbutton = buildElement("button", `delete-monument--${mObject.id}`, "Delete Monument")
    mArticle.appendChild(deleteMbutton);
    deleteMbutton.addEventListener("click", handleDeleteMonument)
    return mArticle;
  };
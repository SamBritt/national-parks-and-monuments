const listMonuments = () => {
    getAllMonuments().then(monumentArray => {
        let monumentFragment = document.createDocumentFragment();

        monumentArray.forEach(monument => {
            let mHtml = buildMonumentHtml(monument);
            monumentFragment.appendChild(mHtml)
        });

        const monumentSection = document.querySelector("#national--monuments");
        clearElement(monumentSection);
        monumentSection.appendChild(monumentFragment);
    })
}
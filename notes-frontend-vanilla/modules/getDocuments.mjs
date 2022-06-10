// Kontrollera att användaren är inloggad innan alla dokument hämtas
export function userLoggedIn() {
    let loggedIn = localStorage.getItem("loggedIn");

    console.log(loggedIn)

    if (loggedIn == "true") {
        getDocuments();
    } else {
        newDocBtn.remove();
        logOutBtn.remove();
        docSection.remove();

        let notLoggedIn = document.createElement("p");
        notLoggedIn.innerText = "Du är inte inloggad, vänligen logga in.";
        docContainer.append(notLoggedIn);

        let backBtn = document.createElement("button");
        backBtn.innerText = "Tillbaka till startsidan";
        docContainer.append(backBtn);

        backBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        })
    }
}


// Hämtning av dokument
export function getDocuments() {

    fetch("http://localhost:3000/documents")
    .then(response => response.json())
    .then(documents => {
      console.log(documents)

      printDocuments(documents)
    })
}


// Skriva ut alla dokument
export function printDocuments(documents) {

    docContainer.innerHTML = "";

    let docHeading = document.createElement("H2");
    docHeading.innerText = "Alla dokument";
    docContainer.append(docHeading);
    
    for (let i = 0; i < documents.length; i++) {

        let createdDate = new Date(documents[i].date).toString();
        let updatedDate = new Date(documents[i].updated).toString();

        let docDiv = document.createElement("div");
        docDiv.id = documents[i].title;
        docContainer.append(docDiv);
        
        let docTitle = document.createElement("h3");
        docTitle.innerText = documents[i].title;
        docDiv.append(docTitle);

        let docDate = document.createElement("span");
        docDate.innerText = createdDate
        .replace("Mon", "").replace("Tue", "").replace("Wed", "").replace("Thu", "").replace("Fri", "").replace("Sat", "").replace("Sun", "")
        .replace("GMT+0200 (centraleuropeisk sommartid)", " ");
        docDiv.append(docDate);

        let docUpdatedDate = document.createElement("span");
        docUpdatedDate.innerText = "(uppdaterad: " + updatedDate
        .replace("Mon", "").replace("Tue", "").replace("Wed", "").replace("Thu", "").replace("Fri", "").replace("Sat", "").replace("Sun", "")
        .replace("GMT+0200 (centraleuropeisk sommartid)", ")");
        docUpdatedDate.id = "docUpdatedDate";
        docDiv.append(docUpdatedDate);

        let editBtn = document.createElement("button");
        editBtn.innerText = "Redigera";
        editBtn.classList = "editBtn";
        docDiv.append(editBtn);

        let readBtn = document.createElement("button");
        readBtn.innerText = "Läs";
        readBtn.classList = "readBtn";
        docDiv.append(readBtn);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Radera";
        deleteBtn.classList = "deleteBtn";
        docDiv.append(deleteBtn);
    }
}
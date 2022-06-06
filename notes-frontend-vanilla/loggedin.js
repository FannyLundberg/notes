// Inloggat läge
const newDocBtn = document.getElementById("newDocBtn");
const logOutBtn = document.getElementById("logOutBtn");
const documentContainer = document.getElementById("documentContainer");


// Hämta alla dokument när sidan läses in
getDocuments();

function getDocuments() {

    fetch("http://localhost:3000/documents")
    .then(response => response.json())
    .then(data => {
      console.log(data)

      printDocuments(data)
    })
}

// Skriva ut alla dokument
function printDocuments(documents) {
    console.log(documents)

    let editBtn;
    let readBtn;
    
    for (let i = 0; i < documents.length; i++) {

        let docDiv = document.createElement("div");
        documentContainer.append(docDiv);
        
        let docTitle = document.createElement("h3");
        docTitle.innerText = documents[i].title;
        docDiv.append(docTitle);

        let docDate = document.createElement("span");
        docDate.innerText = documents[i].date;
        docDiv.append(docDate);

        editBtn = document.createElement("button");
        editBtn.innerText = "Redigera";
        editBtn.className = "editBtn";
        docDiv.append(editBtn);

        readBtn = document.createElement("button");
        readBtn.innerText = "Läs";
        readBtn.className = "readBtn";
        docDiv.append(readBtn);
    }


    // Klick i diven
    documentContainer.addEventListener("click", (event) => {
        console.log("Klick i div")

        if (event.target.className === "editBtn" || event.target.className === "readBtn") {
            console.log("Klick på Redigera- eller Läs-knapp")
            actionBtn(event.target.parentNode.id, event.target.className)
        }
    })


    // Klick på Redigera- eller Läs-knappen
    function actionBtn(parentNode, classname) {
        console.log(parentNode, classname)
    }
}


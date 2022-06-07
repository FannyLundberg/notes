// Inloggat läge
const newDocBtn = document.getElementById("newDocBtn");
const logOutBtn = document.getElementById("logOutBtn");
const docContainer = document.getElementById("docContainer");
const docSection = document.getElementById("docSection");
const main = document.getElementById("main");
// const readDocSection = document.getElementById("readDocSection");
const viewDocs = document.getElementById("viewDocs");

let documents = [];


// Hämta alla dokument när sidan läses in
getDocuments();

function getDocuments() {

    fetch("http://localhost:3000/documents")
    .then(response => response.json())
    .then(documents => {
      console.log(documents)

      printDocuments(documents)
    })
}


// Addera nytt dokument
function addNewDocument(newDocTitle, newDocContent) {

    const newDoc = {
      "title": newDocTitle,
      "text": newDocContent
    }

    fetch("http://localhost:3000/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDoc)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data[0])

      getDocuments();
      docSection.remove();
    })
}


// Skriva ut alla dokument
function printDocuments(documents) {
    console.log(documents)

    docContainer.innerHTML = "";
    
    for (let i = 0; i < documents.length; i++) {

        let docDiv = document.createElement("div");
        docDiv.id = documents[i].title;
        docContainer.append(docDiv);
        
        let docTitle = document.createElement("h3");
        docTitle.innerText = documents[i].title;
        docDiv.append(docTitle);

        let docDate = document.createElement("span");
        docDate.innerText = documents[i].date;
        docDiv.append(docDate);

        let editBtn = document.createElement("button");
        editBtn.innerText = "Redigera";
        editBtn.classList = "editBtn";
        docDiv.append(editBtn);

        let readBtn = document.createElement("button");
        readBtn.innerText = "Läs";
        readBtn.classList = "readBtn";
        docDiv.append(readBtn);
    }
}


// Klick på Redigera- eller Läs-knappen
docContainer.addEventListener("click", (event) => {

    if (event.target.className === "editBtn" || event.target.className === "readBtn") {
        actionBtn(event.target.parentNode.id, event.target.className)
    }
})

function actionBtn(id, className) {

    // Om klick på Läs-knappen
    if (className == "readBtn") {
        console.log("Läsa dokument med id: " + id)
        readDoc(id);
    // Om klick på Redigera-knappen
    } else if (className == "editBtn") {
        console.log("Redigera dokument med id: " + id)
        editDoc(id);
    } else {
        console.log("Hamnar i else")
    }
}


// Funktion för att redigera ett specifikt dokument
function editDoc(title) {

    docSection.innerHTML = "";
    readAndEdit(title);

    // Knapp för att spara uppdatering av dokument
    let submitUpdateBtn = document.createElement("button");
    submitUpdateBtn.innerText = "Uppdatera dokument";
    docSection.append(submitUpdateBtn);
        
    // Klick på Uppdatera dokument-knapp
    submitUpdateBtn.addEventListener("click", () => {
        console.log(document.getElementById("textContent").value)
        let updatedContent = document.getElementById("textContent").value;
        
        addUpdateDoc(title, updatedContent)
    })
}


// Funktion för att uppdatera dokument
function addUpdateDoc(title, updatedContent) {

    const updateDoc = {
        "title": title,
        "text": updatedContent
    }

    fetch("http://localhost:3000/documents", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateDoc)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)

      getDocuments();
      docSection.remove();
    })
}


// Klick på Skapa nytt dokument-knappen
newDocBtn.addEventListener("click", () => {

    docSection.innerHTML = "";

    // Titel-input
    let inputTitle = document.createElement("input");
    inputTitle.placeholder = "Titel";
    inputTitle.id = "titleContent";
    docSection.append(inputTitle);

    showTextarea();

    // Submit-knapp för titel och textarea
    let submitNewDocBtn = document.createElement("button");
    submitNewDocBtn.innerText = "Spara dokument";
    docSection.append(submitNewDocBtn);
    
    // Klick på Spara dokument-knappen
    submitNewDocBtn.addEventListener("click", () => {
        console.log(document.getElementById("titleContent").value)
        let newTitle = document.getElementById("titleContent").value;
    
        console.log(document.getElementById("textContent").value)
        let newContent = document.getElementById("textContent").value;
    
        addNewDocument(newTitle, newContent)
    })
})

// Visa textarea - Tinymce
function showTextarea() {

    // Textarea
    let textArea = document.createElement("textarea");
    textArea.id = "textContent";
    docSection.append(textArea);

    // Inställningar för textarea
    tinymce.init({
        selector: "#textContent",
        plugins: "code",
        menubar: false,
        toolbar: "undo redo | bold italic underline | backcolor | \
        alignleft aligncenter alignright | outdent indent | code ",
    
        setup: function(editor) {
            editor.on("change", () => {
                editor.save();
            })
        }
    })
}


// Funktion för att läsa ett specifikt dokument
function readDoc(title) {

    let searchDoc = {
        "title": title
    }

    fetch("http://localhost:3000/documents/read", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchDoc)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)

        docSection.innerHTML = "";

        let readTitle = document.createElement("h3");
        readTitle.innerText = data[0].title;
        docSection.append(readTitle);

        let readText = document.createElement("p");
        readText.innerHTML = data[0].text;
        docSection.append(readText);

        let closedDoc = document.createElement("button");
        closedDoc.innerHTML = "Stäng dokument";
        docSection.append(closedDoc);

        // Vid klick på Stäng dokumen-knappen
        closedDoc.addEventListener("click", () => {
            docSection.innerHTML = "";
        })
    })
}


function readAndEdit(title) {

    let searchDoc = {
        "title": title
    }

    fetch("http://localhost:3000/documents/read", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchDoc)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)

        let title = document.createElement("h3");
        title.innerHTML = data[0].title;
        docSection.prepend(title);

        // Textarea
        let textArea = document.createElement("textarea");
        textArea.id = "textContent";
        textArea.innerHTML = data[0].text;
        docSection.append(textArea);
 
        // Inställningar för textarea
        tinymce.init({
            selector: "#textContent",
            plugins: "code",
            menubar: false,
            toolbar: "undo redo | bold italic underline | backcolor | \
            alignleft aligncenter alignright | outdent indent | code ",
        
            setup: function(editor) {
                editor.on("change", () => {
                    editor.save();
                })
            }
        })

        let closedEdit = document.createElement("button");
        closedEdit.innerHTML = "Avbryt";
        docSection.append(closedEdit);

        // Vid klick på Stäng dokumen-knappen
        closedEdit.addEventListener("click", () => {
            docSection.innerHTML = "";
        })
    })
}


// Klick på Logga ut-knappen
logOutBtn.addEventListener("click", () => {

    window.location.href = "index.html";
})
import { userLoggedIn, getDocuments, printDocuments } from "./modules/getDocuments.mjs";
import { addNewDocument } from "./modules/addDocument.mjs";
import { editDoc, readAndEdit, addUpdateDoc, readDoc } from "./modules/readAndEditDoc.mjs";
import { deleteDoc } from "./modules/deleteDocument.mjs";

const newDocBtn = document.getElementById("newDocBtn");
const logOutBtn = document.getElementById("logOutBtn");
const docContainer = document.getElementById("docContainer");
const docSection = document.getElementById("docSection");
const main = document.getElementById("main");
const viewDocs = document.getElementById("viewDocs");

// Kontrollera att användaren är inloggad innan alla dokument hämtas
userLoggedIn();

// Klick på Redigera- eller Läs-knappen
docContainer.addEventListener("click", (event) => {

    if (event.target.className === "editBtn" || event.target.className === "readBtn" || event.target.className === "deleteBtn") {
        actionBtn(event.target.parentNode.id, event.target.className)
        console.log(event.target.parentNode)
    }
})

function actionBtn(id, className) {

    if (className == "readBtn") {
        readDoc(id);
        console.log(id)
    } else if (className == "editBtn") {
        editDoc(id);
    } else if (className == "deleteBtn") {
        deleteDoc(id);
    } else {
        console.log("Hamnar i else")
    }
}


// Klick på Skapa nytt dokument-knappen
newDocBtn.addEventListener("click", () => {

    docSection.innerHTML = "";

    let heading = document.createElement("h4");
    heading.innerText = "Skapa nytt dokument";
    heading.className = "docHeading";
    docSection.append(heading);

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
        alignleft aligncenter alignright | outdent indent ",
    
        setup: function(editor) {
            editor.on("change", () => {
                editor.save();
            })
        }
    })
}


// Klick på Logga ut-knappen
logOutBtn.addEventListener("click", () => {

    window.location.href = "index.html";
    localStorage.clear();
})
// Funktion för att redigera ett specifikt dokument
export function editDoc(title) {

    docSection.innerHTML = "";

    let heading = document.createElement("h4");
    heading.innerText = "Redigera dokument";
    heading.className = "docHeading";
    docSection.append(heading);
    
    readAndEdit(title);

    // Knapp för att spara uppdatering av dokument
    let submitUpdateBtn = document.createElement("button");
    submitUpdateBtn.innerText = "Uppdatera dokument";
    submitUpdateBtn.id = "submitUpdateBtn";
    docSection.append(submitUpdateBtn);
        
    submitUpdateBtn.addEventListener("click", () => {
        console.log(document.getElementById("textContent").value)
        let updatedContent = document.getElementById("textContent").value;
        
        addUpdateDoc(title, updatedContent);
        location.reload();
    })
}


// Funktion för att läsa ett specifikt dokument
export function readDoc(title) {

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
        closedDoc.id = "stopReadBtn";
        docSection.append(closedDoc);

        // Vid klick på Stäng dokumen-knappen
        closedDoc.addEventListener("click", () => {
            docSection.innerHTML = "";
        })
    })
}


// Kunna se dokument och redigera
export function readAndEdit(title) {

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
        title.id = "blockH3";
        docSection.append(title);

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
            alignleft aligncenter alignright | outdent indent ",
        
            setup: function(editor) {
                editor.on("change", () => {
                    editor.save();
                })
            }
        })

        let closedEdit = document.createElement("button");
        closedEdit.innerHTML = "Avbryt";
        closedEdit.id = "stopEditBtn";
        docSection.append(closedEdit);

        // Vid klick på Stäng dokumen-knappen
        closedEdit.addEventListener("click", () => {
            docSection.innerHTML = "";
        })
    })
}


// Funktion för att uppdatera dokument
export function addUpdateDoc(title, updatedContent) {

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
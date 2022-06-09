import { getDocuments } from "./getDocuments.mjs";

// Addera nytt dokument
export function addNewDocument(newDocTitle, newDocContent) {

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
      console.log(data[0]);
      location.reload();
      getDocuments();
      docSection.remove();
    })
}
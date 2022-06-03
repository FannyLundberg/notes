import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDocumentsService {

  constructor() { }

  addDocument(document: any) {
    console.log(document)

    const newDocument = {
      "title": document.title,
      "text": document.text
    }

    fetch("http://localhost:3000/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDocument)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }
}

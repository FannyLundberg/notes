import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveDoc(content: any) {
    console.log(content)
    console.log("Klickat på Spara dokument")
  }

}

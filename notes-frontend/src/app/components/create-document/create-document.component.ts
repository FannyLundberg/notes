import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.scss']
})
export class CreateDocumentComponent implements OnInit {

  documentContent: any;

  constructor() { }

  ngOnInit(): void {
  }

  handleChange(event: any) {
    this.documentContent = (event.target as HTMLInputElement).value;

    console.log(this.documentContent);
  }

  saveDoc(title: string, content: any) {
    console.log(title)
    console.log(content)
    console.log("Klickat på Spara dokument")
    // console.log(this.documentContent)
  }

}

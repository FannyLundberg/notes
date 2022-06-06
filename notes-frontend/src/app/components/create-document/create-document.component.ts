import { Component, OnInit } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';

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

  handleInput(content: any) {
    console.log("Hej" + content)
  }

  saveDoc(title: string, content: any) {
    console.log("titel: " + title)
    console.log("content: " + content)
    console.log("Klickat på Spara dokument")
    // console.log(this.documentContent)
  }

}

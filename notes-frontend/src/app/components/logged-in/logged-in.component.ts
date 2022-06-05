import { Component, OnInit } from '@angular/core';
import { GetDocumentsService } from 'src/app/services/get-documents.service';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  data: any;

  constructor(private getDocumentsService: GetDocumentsService) { }

  ngOnInit(): void {
    this.getDocumentsService.documentsData$.subscribe(dataFromDatabase => {
      this.data = dataFromDatabase;
    })
    this.getDocumentsService.getDocuments();
  }

  // Klick på Logga ut-knappen  
  logOut() {
    location.href = "http://localhost:4200"
  }
}

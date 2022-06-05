import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDocumentsService {

  private documentsData = new Subject<any>();
  documentsData$: Observable<any> = this.documentsData.asObservable();

  constructor() { }

  getDocuments() {

    fetch("http://localhost:3000/documents")
    .then(response => response.json())
    .then(data => {
      console.log(data)

      this.documentsData.next(data);
    })
  }

}

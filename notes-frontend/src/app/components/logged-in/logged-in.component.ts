import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Klick på Logga ut-knappen  
  logOut() {
    location.href = "http://localhost:4200"
  }
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginService {

  private user = new Subject<any>();
  user$: Observable<any> = this.user.asObservable();

  constructor() { }

  checkUser(user: object) {
    console.log(user)

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)

      if (data.message == "success") {
        console.log("Rätt inloggningsuppgifter")
        location.href = "http://localhost:4200/loggedin"
        
      } else {
        console.log("Fel inloggningsuppgifter")
        location.href = "http://localhost:4200/wronglogin"
      }
    })
  }
}

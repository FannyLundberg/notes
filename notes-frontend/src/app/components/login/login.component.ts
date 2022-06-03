import { Component, OnInit } from '@angular/core';
import { CheckLoginService } from 'src/app/services/check-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: object = {};

  constructor(private checkUserService: CheckLoginService) { }

  ngOnInit(): void {
  }

  // Kontrollera om användaren har angett rätt uppgifter
  checkLogin(userName: string, password: string) {

    this.user = {
      "userName": userName,
      "password": password
    }

    this. checkUserService.checkUser(this.user);
  }

}

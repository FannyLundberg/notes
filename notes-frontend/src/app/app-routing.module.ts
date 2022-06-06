import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WrongLoginComponent } from './components/wrong-login/wrong-login.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "loggedin", component: LoggedInComponent },
  { path: "createdocument", component: CreateDocumentComponent },
  { path: "wronglogin", component: WrongLoginComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { WrongLoginComponent } from './components/wrong-login/wrong-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoggedInComponent,
    NotFoundComponent,
    CreateDocumentComponent,
    WrongLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

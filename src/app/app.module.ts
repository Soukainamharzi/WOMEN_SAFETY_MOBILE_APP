import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Ajout de l'import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { PrincipaleComponent } from './principale/principale.component';
import { AssistanceNumbersComponent } from './assistance-numbers/assistance-numbers.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    PrincipaleComponent,
    AssistanceNumbersComponent,
    EmergencyContactComponent,
    AddContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Ajout de HttpClientModule
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


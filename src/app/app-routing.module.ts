import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { PrincipaleComponent } from './principale/principale.component';
import { AssistanceNumbersComponent } from './assistance-numbers/assistance-numbers.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { AddContactComponent } from './add-contact/add-contact.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: 'principale', component: PrincipaleComponent },
  { path: 'assistance-numbers', component: AssistanceNumbersComponent },
  { path: 'emergency-contact', component: EmergencyContactComponent },
  { path: 'add-contact', component: AddContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

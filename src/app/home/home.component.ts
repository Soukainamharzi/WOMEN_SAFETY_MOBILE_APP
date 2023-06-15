import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) { }

  goToSignUp(): void {
    this.router.navigate(['/signup']);
  }

  goToSignIn(): void {
    this.router.navigate(['/signin']);
  }
}

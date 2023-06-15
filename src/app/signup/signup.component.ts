import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: any = {};

  constructor(private http: HttpClient, private router: Router ) { }

  onSubmit() {
    this.http.post('http://localhost/signup.php', this.user).subscribe({
      next: (response) => {
        console.log('Utilisateur inscrit avec succès !', response);
        this.user = {};
        this.router.navigate(['/principale']);
      },
      error: (error) => {
        console.error('Erreur lors de l\'inscription :', error);
      }
    });
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}

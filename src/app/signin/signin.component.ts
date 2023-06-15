import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface SignInResponse {
  authenticationSuccess: boolean;
  message: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user: any = {};
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post<SignInResponse>('http://localhost/signin.php', this.user).subscribe({
      next: (response) => {
        console.log('Connexion réussie !', response);
        if (response.authenticationSuccess) {
          this.router.navigate(['/principale']);
        } else {
          this.errorMessage = response.message;
        }
        this.user = {};
      },
      error: (error) => {
        console.error('Erreur lors de la connexion :', error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }
}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user: any = {}; // Modèle de l'utilisateur

  constructor(private http: HttpClient) { }

  onSubmit() {
    // Envoyer les données de l'utilisateur à la base de données
    this.http.post('http://localhost/signup.php', this.user).subscribe({
      next: (response) => {
        console.log('Utilisateur inscrit avec succès !', response);
        // Réinitialiser le formulaire après l'inscription réussie
        this.user = {};
      },
      error: (error) => {
        console.error('Erreur lors de l\'inscription :', error);
      }
    });
  }
}



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  nom: string;
  prenom: string;
  adresse: string;
  telephone: string;
  email: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {
    nom: '',
    prenom: '',
    adresse: '',
    telephone: '',
    email: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur connecté (vous devez implémenter cette partie)
    const userId = '123'; // Remplacez '123' par l'ID de l'utilisateur connecté

    this.getUserInfo(userId);
  }

  getUserInfo(userId: string): void {
    this.http.get<User>('http://localhost/getUserInfo.php?userId=' + userId).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error);
      }
    });
  }
}




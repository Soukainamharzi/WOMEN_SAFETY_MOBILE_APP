import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Contact {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
}

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Récupérer les contacts d'urgence de l'utilisateur depuis la base de données
    this.getEmergencyContacts();
  }

  getEmergencyContacts(): void {
    // Effectuer une requête HTTP pour récupérer les contacts d'urgence de l'utilisateur
    this.http.get<Contact[]>('http://localhost/getEmergencyContacts.php').subscribe({
      next: (response) => {
        this.contacts = response;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des contacts d\'urgence :', error);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/principale']);
  }

  goToAddContact(): void {
    this.router.navigate(['/add-contact']);
  }

  goToUpdateContact(): void {
    this.router.navigate(['/update-contact']);
  }

  deleteContact(): void {
    // Code pour supprimer un contact
  }
}


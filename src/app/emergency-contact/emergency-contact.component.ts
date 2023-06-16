import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Contact {
  id: number;
  nom: string;
  prenom: string;
  telephone: string;
  user_id: number;
}

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
  contacts: Contact[] = [];
  userId: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur connecté
    this.getUserId();

    // Récupérer les contacts d'urgence depuis la base de données
    this.getEmergencyContacts();
  }

  getUserId(): void {
    const url = `http://localhost/get-user-id.php?user_id=${this.userId}`;
    this.http.get<any>(url).subscribe({
      next: (response) => {
        this.userId = response.user_id;
        this.getEmergencyContacts(); // Appel à la méthode pour récupérer les contacts d'urgence de l'utilisateur connecté
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de l\'ID de l\'utilisateur :', error);
      }
    });
  }


  getEmergencyContacts(): void {
    // Effectuer une requête HTTP pour récupérer les contacts d'urgence de l'utilisateur connecté depuis la base de données
    const url = `http://localhost/emergency-contact.php?user_id=${this.userId}`;
    this.http.get<Contact[]>(url).subscribe({
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

  deleteContact(contact: Contact): void {
    const url = `http://localhost/delete-contact.php?contact_id=${contact.id}`;
    this.http.delete(url).subscribe({
      next: () => {
        // Suppression réussie, mise à jour de la liste des contacts
        this.getEmergencyContacts();
      },
      error: (error) => {
        console.error('Erreur lors de la suppression du contact :', error);
      }
    });
  }
}

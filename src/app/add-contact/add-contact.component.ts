
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Contact {
  nom: string;
  prenom: string;
  telephone: string;
}

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Contact = { nom: '', prenom: '', telephone: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('http://localhost/add-contact.php', this.contact).subscribe({
      next: (response) => {
        console.log('Contact ajouté avec succès !', response);
        this.router.navigate(['/emergency-contact']);
      },
      error: (error) => {
        console.error('Erreur lors de l\'ajout du contact :', error);
      }
    });
  }
}


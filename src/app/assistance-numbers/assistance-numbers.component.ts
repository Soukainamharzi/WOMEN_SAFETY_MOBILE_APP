import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assistance-numbers',
  templateUrl: './assistance-numbers.component.html',
  styleUrls: ['./assistance-numbers.component.css']
})
export class AssistanceNumbersComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/principale']); // Mettez ici le chemin vers votre page principale
  }
  policeNumber='';
  ambulanceNumber='';
  fireNumber='';

  getAssistanceNumbers(country: string): void {
    // Faites une requête à la base de données pour récupérer les numéros correspondants au pays
    // Remplacez les valeurs factices par votre propre logique de récupération des numéros de la base de données
    if (country === 'maroc') {
      this.policeNumber = '123';
      this.ambulanceNumber = '456';
      this.fireNumber = '789';
    } else if (country === 'espagne') {
      this.policeNumber = '111';
      this.ambulanceNumber = '222';
      this.fireNumber = '333';
    } else if (country === 'france') {
      this.policeNumber = '444';
      this.ambulanceNumber = '555';
      this.fireNumber = '666';
    }
  }
}

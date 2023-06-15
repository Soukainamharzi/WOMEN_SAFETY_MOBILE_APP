import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit {
  playSiren(): void {
    const audio = document.getElementById('sirenSound') as HTMLAudioElement;
    audio.play()
      .then(() => {
        console.log('Police siren started playing.');
      })
      .catch((error) => {
        console.error('Failed to play police siren:', error);
      });
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}




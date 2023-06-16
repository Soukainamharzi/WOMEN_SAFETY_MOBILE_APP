import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit, AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef;
  @ViewChild('canvasElement') canvasElement!: ElementRef;
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


  capturedImage: SafeResourceUrl | null = null;
  isCameraOpen: boolean = false;
  showConfirmationButton: boolean = false;

  constructor(private router: Router, private sanitizer: DomSanitizer,private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    document.getElementById('captureButton')?.addEventListener('click', this.captureImage.bind(this));
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  captureImage(): void {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    const canvas: HTMLCanvasElement = this.canvasElement.nativeElement;

    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL('image/png');
      console.log('Captured image:', imageData);
      this.capturedImage = this.sanitizer.bypassSecurityTrustResourceUrl(imageData);
      this.saveToGallery(imageData);
      this.resetCapture();
    } else {
      console.error('Failed to get 2D context for canvas.');
    }
  }

  saveToGallery(imageData: string): void {
    const anchor = document.createElement('a');
    anchor.href = imageData;
    anchor.download = 'captured_image.png';
    anchor.click();
  }

  resetCapture(): void {
    this.isCameraOpen = false;
    this.capturedImage = null;
  }

  openCamera(): void {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        const video: HTMLVideoElement = this.videoElement.nativeElement;
        video.srcObject = stream;
        video.play();
        this.isCameraOpen = true;
      })
      .catch((error) => {
        console.error('Failed to access camera:', error);
      });
  }
  sendHelpMessage(contact: any): void {
    // Préparer les données pour l'envoi du message (par exemple, l'ID du contact, le contenu du message pré-saisi et la localisation)
    const messageData = {
      contactId: contact.id,
      message: 'Besoin d\'aide !',
      location: undefined as any,// Modifier la valeur initiale à undefined
    };

    // Obtenez la localisation de l'utilisateur
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Mettez à jour les coordonnées de localisation dans les données du message
        messageData.location = { latitude, longitude };

        // Envoyer le message pré-saisi avec la localisation à l'API PHP
        this.http.post('https://votre-api-endpoint.com/send-help-message', messageData).subscribe(
          () => {
            console.log('Message envoyé avec succès au contact :', contact);
          },
          (error) => {
            console.error('Erreur lors de l\'envoi du message au contact :', contact, error);
          }
        );
      },
      (error) => {
        console.error('Erreur lors de la récupération de la localisation :', error);
      }
    );
  }

}




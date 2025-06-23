import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-webcam',
  imports: [],
  templateUrl: './webcam.component.html',
  styleUrl: './webcam.component.css'
})
export class WebcamComponent implements OnInit {
  cameraUrl = 'https://video.estadodelmar.com.ar/camaras/torreon-del-monje/';
  cameraUrl2 = 'https://www.worldlivecamera.com/es/webcam/mar-del-plata-las-toscas.html';
  safeUrl: SafeResourceUrl = '';
  safeUrl2: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cameraUrl);
      this.safeUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl(this.cameraUrl2);
  }

  // Opción 1: Propiedad pre-calculada
  encodedUrl = encodeURIComponent(this.cameraUrl);
  encodedUrl2 = encodeURIComponent(this.cameraUrl2);

  // Opción 2: Método para generar la URL
  getProxyUrl(url: string): string {
    return `/proxy/?url=${encodeURIComponent(url)}`;
  }
}

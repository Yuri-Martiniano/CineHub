import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<string[]>('http://localhost:3000/videos').subscribe(
      (data) => {
        this.videos = data;
      },
      (error) => {
        console.error('Erro ao buscar vídeos:', error);
      }
    );
  }

  playVideo(video: string) {
    window.open(`http://localhost:3000/videos/${video}`, '_blank');
  }
}

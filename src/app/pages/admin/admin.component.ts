import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  videos: string[] = [];
  newVideoName = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadVideos();
  }

  loadVideos() {
    this.http.get<string[]>('http://localhost:3000/videos').subscribe(
      (data) => {
        this.videos = data;
      },
      (error) => {
        console.error('Erro ao carregar vídeos:', error);
      }
    );
  }

  deleteVideo(video: string) {
    
    console.log('Excluindo vídeo:', video);
  }

  addVideo() {
    
    console.log('Adicionando vídeo:', this.newVideoName);
    this.newVideoName = '';
  }
}

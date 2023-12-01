import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  ngOnInit(): void {
    this.title = 'myTitle';
    this.description = 'myDescription';
    this.createdDate = new Date();
    this.snaps = 5;
    this.imageUrl = 'assets/images/snap1.jpg';
  }
}

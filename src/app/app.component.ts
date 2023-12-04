import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit() {

    this.faceSnaps = [
    {
      title:'myTitle',
      description: 'myDescription',
      createdDate: new Date(),
      snaps: 255,
      imageUrl: 'assets/images/snap1.jpg',
      location:'Courbevoie'
    }, 
    {
      title:'myOtherTitle',
      description: 'myOtherDescription',
      createdDate: new Date(),
      snaps: 120,
      imageUrl: 'assets/images/snap2.jpg',
      location:'Paris'
    },
    {
      title:'myLastTitle',
      description: 'myLastDescription',
      createdDate: new Date(),
      snaps: 0,
      imageUrl: 'assets/images/snap3.jpg' 
    }];  

  }
}



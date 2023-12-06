import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  ngOnInit(): void {

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

import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit() {

    this.mySnap = new FaceSnap(
      'myTitle',
      'myDescription',
      new Date(),
      0,
      'assets/images/snap1.jpg'
    );  

    this.myOtherSnap = new FaceSnap(
      'myOtherTitle',
      'myOtherDescription',
      new Date(),
      0,
      'assets/images/snap2.jpg'
    ); 
    
    this.myLastSnap = new FaceSnap(
      'myLastTitle',
      'myLastDescription',
      new Date(),
      0,
      'assets/images/snap3.jpg'
    );  

  }
}



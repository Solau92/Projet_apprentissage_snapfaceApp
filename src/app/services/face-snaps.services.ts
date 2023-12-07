import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn : 'root'
})
export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
          id:1,
          title:'myTitle',
          description: 'myDescription',
          createdDate: new Date(),
          snaps: 255,
          imageUrl: 'assets/images/snap1.jpg',
          location:'Courbevoie'
        }, 
        {
          id:2,
          title:'myOtherTitle',
          description: 'myOtherDescription',
          createdDate: new Date(),
          snaps: 120,
          imageUrl: 'assets/images/snap2.jpg',
          location:'Paris'
        },
        {
          id:3,
          title:'myLastTitle',
          description: 'myLastDescription',
          createdDate: new Date(),
          snaps: 0,
          imageUrl: 'assets/images/snap3.jpg' 
        }];  

  getAllFacesnaps(): FaceSnap[] {
    return this.faceSnaps;
  }    

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

    if(!faceSnap) {
        throw new Error('FaceSnap not found!');
    } else {
        return faceSnap;
    }
  }
  
  snapFaceSnapById(faceSnapId: number, snapType: string): void{
    
    const faceSnap = this.getFaceSnapById(faceSnapId);
    
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
    
}
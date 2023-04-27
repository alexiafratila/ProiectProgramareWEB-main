import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Motorcycle } from '../Models/motorcycle';
import {addDoc, collection, collectionData, Firestore} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {

  constructor(private fs: Firestore) { }

  getMotorcycles():Observable<Motorcycle[]>{
    console.log(this.fs);
    const myCollection: any = collection(this.fs, 'motorcycle');
    return collectionData(myCollection);
  }

  addMotorcycles(motorcycle:Motorcycle){
    const myCollection = collection(this.fs, 'motorcycle')
    addDoc(myCollection, motorcycle);
  }
}

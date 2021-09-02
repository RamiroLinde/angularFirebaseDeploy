import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { House } from '../interfaces/house.interface';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  arrHouses: House[] = [];
  collection!: AngularFirestoreCollection<House>;
  id: number = 5;
  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection<House>('houses');
  }

  getAll(): Observable<any[]> {
    return this.collection.valueChanges();
  }

  getById(id: string){
    return this.collection.doc(id).valueChanges();
  }

  create(pHouse: House): Promise<void> {
    return new Promise((resolve, reject)=>{
      try{
        const id = this.firestore.createId();
        pHouse.id = id;
        const result = this.collection.doc(id).set(pHouse);
        resolve(result);
      }catch(err){
        reject(err);
      }
    })
  
  }
  // getAll(){
  //   return this.arrHouses;
  // }

  // getBtId(id: number): House | undefined{
  //   return this.arrHouses.find(house => house.id === id);
  // }

  // create(pHouse: House): string {
  //   // pHouse.id = this.id;
  //   // this.arrHouses.push(pHouse);
  //   // this.id++;
  //   // console.log(this.arrHouses);
  //   // return 'success';
  // }
}

import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interface';
import { HOUSES } from '../interfaces/houses.db';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  arrHouses: House[];
  id: number = 5;
  constructor() { 
    this.arrHouses = HOUSES;
  }

  getAll(){
    return this.arrHouses;
  }

  getBtId(id: number): House | undefined{
    return this.arrHouses.find(house => house.id === id);
  }

  create(pHouse: House): string {
    pHouse.id = this.id;
    this.arrHouses.push(pHouse);
    this.id++;
    console.log(this.arrHouses);
    return 'success';
  }
}

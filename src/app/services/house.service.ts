import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interface';
import { HOUSES } from '../interfaces/houses.db';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  arrHouses: House[];
  constructor() { 
    this.arrHouses = HOUSES;
  }
}

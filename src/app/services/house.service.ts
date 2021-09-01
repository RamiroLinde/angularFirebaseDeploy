import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interface';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  arrHouses: House[];
  constructor() { 
    this.arrHouses = [
      {
        id: 0,
        titulo: 'Bonita casa adosada',
        direccion: 'Calle del manzano 13, 18140',
        ciudad: 'Granada',
        numHabitaciones: 7,
        propietario: 'RamiroLinde',
        disponible: true,
        foto: '',
        lat: 1.2,
        lon: 2.5

      }
    ]
  }
}

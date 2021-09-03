import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrHouses: Observable<any[]> = new Observable;
  latitud: number = 0;
  longitud: number = 0;

  constructor(private houseService: HouseService) { 
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
    });
  }
  ngOnInit(): void {
    this.arrHouses = this.houseService.getAll();
  }

  onRightClick($event: any){
    alert('Tocando el boton derecho del rato');
  }
}
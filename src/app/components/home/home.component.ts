import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrHouses: House[];
  constructor(private houseService: HouseService) { 
    this.arrHouses=[];
  }

  ngOnInit(): void {
    this.arrHouses = this.houseService.getAll();
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { House } from 'src/app/interfaces/house.interface';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {


  myHouse: House | undefined;
  constructor(private activatedRoute: ActivatedRoute, private houseService: HouseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params =>{
      const result = await this.houseService.getById(params.idCasa);
      result.subscribe(data => {
        this.myHouse = data;
      })
    })
  }

  
  

}

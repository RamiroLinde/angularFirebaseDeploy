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


  house: House | undefined;
  constructor(private activatedRoute: ActivatedRoute, private houseService: HouseService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      const id = params.idCasa;
      this.house = this.houseService.getBtId(Number(id));
      console.log(this.house, id);
    })
  }

}

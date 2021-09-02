import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Input() house: House | undefined;
  constructor(private housesService: HouseService) { }

  ngOnInit(): void {
  }

  async onDelete(id: string | undefined): Promise<any>{
    if(id){
      const response = await this.housesService.delete(id);
      if(response.success){
        alert('Casa borrada correctamente');
      }
    }
  }
}

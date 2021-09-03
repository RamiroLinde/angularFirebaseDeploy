import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css']
})
export class HomeNewComponent implements OnInit {

  houseUpdate: any = {};
  constructor(
    private housesService: HouseService,
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params.idCasa) {
        //Puedo preguntar por los datos de la casa por id
        const response = this.housesService.getById(params.idCasa);
        response.subscribe(data => {
          this.houseUpdate = data;
        })
      }
    })
  }

  async onSubmit(pForm: any) {
    const casa = pForm.value;
    casa.disponibilidad = true;
    let message: any;
    if (this.houseUpdate.id) {
      message = await this.housesService.create(casa, this.houseUpdate.id);
    } else {
      message = await this.housesService.create(casa);
    }

    console.log(message);
    if (message.success) {
      this.router.navigate(["/home"]);
    }

  }

}


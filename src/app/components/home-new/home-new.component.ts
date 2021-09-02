import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.css']
})
export class HomeNewComponent implements OnInit {

  constructor(
    private housesService: HouseService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(pForm: any) {
    const casa = pForm.value;
    casa.disponibilidad = true;

    const message = this.housesService.create(casa);
    // if (message === 'success') {
    //   this.router.navigate(['/home']);
    // }
  }

}


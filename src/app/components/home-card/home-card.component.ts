import { Component, Input, OnInit } from '@angular/core';
import { House } from 'src/app/interfaces/house.interface';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent implements OnInit {

  @Input() house: House | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

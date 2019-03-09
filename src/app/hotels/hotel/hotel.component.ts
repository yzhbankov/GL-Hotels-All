import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../models';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  @Input() hotel: IHotel;

  constructor() { }

  ngOnInit() {
  }

}

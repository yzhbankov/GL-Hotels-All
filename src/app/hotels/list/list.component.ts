import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../models';
import { Hotels } from '../mock-hotels';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  hotels = Hotels;

  @Output() hotel: EventEmitter<IHotel> = new EventEmitter();

  constructor() { }

  public selectHotel(hotel: IHotel) {
    this.hotel.emit(hotel)
  }

  ngOnInit() {
  }

}

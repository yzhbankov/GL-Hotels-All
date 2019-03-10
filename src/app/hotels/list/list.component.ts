import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() hotels: IHotel[];

  @Output() hotel: EventEmitter<IHotel> = new EventEmitter();

  public selectHotel(hotel: IHotel): void {
    this.hotel.emit(hotel)
  }

  ngOnInit(): void {
  }

}

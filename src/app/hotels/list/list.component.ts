import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() hotels: IHotel[];
  @Input() favorites: IHotel[];
  @Input() isDataLoading: boolean;
  @Input() addHotelToFavorites: Function;
  @Input() removeHotelFromFavorites: Function;

  @Output() hotel: EventEmitter<IHotel> = new EventEmitter();

  public selectHotel(hotel: IHotel): void {
    this.hotel.emit(hotel)
  }

  public hotelInFavorites(hotel: IHotel): boolean {
    return this.favorites.some((favorite_hotel: IHotel) => favorite_hotel.title ===  hotel.title)
  }

  public ngOnInit(): void {  }

}

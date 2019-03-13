import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public hotels: IHotel[];
  @Input() public favorites: IHotel[];
  @Input() public isDataLoading: boolean;
  @Input() public addHotelToFavorites: Function;
  @Input() public removeHotelFromFavorites: Function;

  @Output() public hotel: EventEmitter<IHotel> = new EventEmitter();

  public selectHotel(hotel: IHotel): void {
    this.hotel.emit(hotel);
  }

  public hotelInFavorites(hotel: IHotel): boolean {
    return this.favorites.some((favoriteHotel: IHotel) => favoriteHotel.title ===  hotel.title);
  }

  public ngOnInit(): void {  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IHotel } from '../models';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input() public hotel: IHotel;
  @Input() public index: number;
  @Input() public inFavorites: boolean;
  @Input() public addHotelToFavorites: Function;
  @Input() public removeHotelFromFavorites: Function;

  public addHotel(hotel: IHotel, event: Event): void {
    event.stopPropagation();

    this.addHotelToFavorites(hotel);
  }

  public removeHotel(hotel: IHotel, event: Event): void {
    event.stopPropagation();

    this.removeHotelFromFavorites(hotel);
  }

  public ngOnInit(): void {  }

}

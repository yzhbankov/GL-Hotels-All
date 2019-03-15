import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../../favorites.service';
import { IHotel } from '../models';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input() public hotel: IHotel;
  @Input() public index: number;

  public constructor(private favoriteService: FavoritesService) { }

  public addHotel(hotel: IHotel, event: Event): void {
    event.stopPropagation();

    this.favoriteService.addFavorites(hotel);
  }

  public removeHotel(hotel: IHotel, event: Event): void {
    event.stopPropagation();

    this.favoriteService.removeFromFavorites(hotel);
  }

  public ngOnInit(): void {  }

}

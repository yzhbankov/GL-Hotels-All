import { Component, Input, OnInit } from '@angular/core';
import { FavoritesService } from '../../../services/favorites.service';
import { IHotel } from '../../../models';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input() public hotel: IHotel;
  @Input() public index: number;

  public constructor(private favoriteService: FavoritesService) { }

  public handleFavorites(id: string, event: Event): void {
    event.stopPropagation();

    this.favoriteService.handleFavorites(id);
  }

  public ngOnInit(): void {  }

}

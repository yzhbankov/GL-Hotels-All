import { Component, OnInit } from '@angular/core';

import { IHotel } from '../../models';
import { ToastrService } from 'ngx-toastr';
import { HotelsService } from '../../services/hotels.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public hotels: IHotel[];
  public selectedHotel: IHotel;
  public isDataLoading: boolean = true;
  public activeFilter: string;
  public searchValue: string;

  public constructor(private toastr: ToastrService, private hotelsService: HotelsService, private favoritesService: FavoritesService ) {
  }

  public displaySelectedHotel(hotel: IHotel): void {
    this.selectedHotel = hotel;
  }

  public setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }

  public setSearchValue(value: string): void {
    this.searchValue = value;
  }

  public ngOnInit(): void {
    this.hotelsService.loadAll()
      .subscribe(
        (hotels: IHotel[]) => {
          this.hotels = hotels;
          this.selectedHotel = hotels[0];
        },
        () => {
        },
        () => {
          this.isDataLoading = false;
        });

    this.favoritesService.getUserFavorites()
      .subscribe((favorites: string[]) => {
        console.info('favorites', favorites);
      });
  }
}

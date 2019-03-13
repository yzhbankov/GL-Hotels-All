import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/internal/operators';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { IHotel } from './hotels/models';
import { hotels } from './hotels/mock-hotels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public title: string = 'GL-Hotels-App';

  public hotels: IHotel[] = [];
  public favorites: IHotel[] = [];
  public selectedHotel: IHotel = hotels[0];
  public isDataLoading: boolean = true;
  public activeFilter: string;
  public searchValue: string;

  public constructor(private toastr: ToastrService) {
    this.removeHotelFromFavorites = this.removeHotelFromFavorites.bind(this);
    this.addHotelToFavorites = this.addHotelToFavorites.bind(this);
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

  public addHotelToFavorites(hotel: IHotel): void {
    const hasInFavorites: boolean = this.favorites.some((favoriteHotel: IHotel) => favoriteHotel.title === hotel.title);
    if (!hasInFavorites) {
      this.favorites.push(hotel);
      this.toastr.info('', `Hotel "${hotel.title}" added to favorites!`);
    }
  }

  public removeHotelFromFavorites(hotel: IHotel): void {
    const itemIndex: number = this.favorites.findIndex((favoriteHotel: IHotel) => favoriteHotel.title === hotel.title);

    this.favorites.splice(itemIndex, 1);
    this.toastr.info('', `Hotel "${hotel.title}" removed from favorites!`);
  }

  public ngOnInit(): void {
    from(hotels).pipe(
      concatMap((item: IHotel) => of(item).pipe(delay(1000)))
    ).subscribe((hotel: IHotel) => {
        this.hotels.push(hotel);
      },
      () => {
      },
      () => {
        this.isDataLoading = false;
      });
  }

}

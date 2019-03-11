import {Component} from '@angular/core';
import {IHotel} from './hotels/models';
import {Hotels} from './hotels/mock-hotels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'GL-Hotels-App';

  public hotels: IHotel[] = Hotels;
  public favorites: IHotel[] = [];
  public selectedHotel: IHotel = Hotels[0];

  public activeFilter: string;
  public searchValue: string;

  public displaySelectedHotel(hotel: IHotel): void {
    this.selectedHotel = hotel;
  }

  public setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }

  public setSearchValue(value: string): void {
    this.searchValue = value;
  }

  public addHotelToFavorites(hotel: IHotel):  void {
    const hasInFavorites = this.favorites.some((favorite_hotel: IHotel) => favorite_hotel.title === hotel.title);
    if (!hasInFavorites) {
      this.favorites.push(hotel);
    }
  }

  public removeHotelFromFavorites(hotel: IHotel):  void {
    const itemIndex = this.favorites.findIndex((favorite_hotel: IHotel) => favorite_hotel.title === hotel.title);

    this.favorites.splice(itemIndex, 1);
  }

}

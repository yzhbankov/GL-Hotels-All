import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IHotel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: IHotel[] = [];

  public constructor(private toastr: ToastrService) {
  }

  public addFavorites(hotel:  IHotel): void {
    const hasInFavorites: boolean = this.favorites.some((favoriteHotel: IHotel) => favoriteHotel.title === hotel.title);
    if (!hasInFavorites) {
      this.favorites.push(hotel);
    }
    this.toastr.info('', `Hotel "${hotel.title}" added to favorites!`);
  }

  public getFavorites(): IHotel[] {
    return this.favorites;
  }

  public getFavoritesCount(): number {
    return this.favorites.length;
  }

  public removeFromFavorites(hotel: IHotel): void {
    const itemIndex: number = this.favorites.findIndex((favoriteHotel: IHotel) => favoriteHotel.title === hotel.title);

    this.favorites.splice(itemIndex, 1);
    this.toastr.info('', `Hotel "${hotel.title}" removed from favorites!`);
  }

  public hotelInFavorites(hotel: IHotel): boolean {
    return this.favorites.some((favoriteHotel: IHotel) => favoriteHotel.title ===  hotel.title);
  }
}

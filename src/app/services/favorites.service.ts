import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';

import { HotelsService } from './hotels.service';
import { IHotel, IUser, IUserResponse } from '../models';
import { HandleFavorites } from '../store/actions/user.actions';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private baseUrl: string;
  private favorites: string[] = [];

  public constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private hotelService: HotelsService,
    private store: Store<IUser>
  ) {
    this.baseUrl = environment.apiUrl;
  }

  public handleFavorites(id: string): void {
    const hotel: IHotel = this.hotelService.getHotelById(id);
    const hasInFavorites: boolean = this.favorites.indexOf(id) !== -1;
    if (!hasInFavorites && id) {
      this.http
        .post<IUserResponse>(
          `${this.baseUrl}/users/favorites/`,
          { hotelId: id },
          {}
        )
        .subscribe((response: IUserResponse) => {
          this.favorites = response.favorites;
          this.store.dispatch(new HandleFavorites(this.favorites));
          this.toastr.info('', `Hotel "${hotel.title}" added to favorites!`);
        });
    } else if (id) {
      this.http
        .delete<IUserResponse>(
          `${this.baseUrl}/users/favorites/${id}`,
        )
        .subscribe( (response: IUserResponse) => {
            this.favorites = response.favorites;
          this.store.dispatch(new HandleFavorites(this.favorites));
          this.toastr.info('', `Hotel "${hotel.title}" removed from favorites!`);
          }
        );
    }
  }

}

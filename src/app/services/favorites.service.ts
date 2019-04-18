import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { HotelsService } from './hotels.service';
import { IHotel, IUserResponse } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private baseUrl: string;
  private favorites: string[] = [];

  public constructor( private http: HttpClient, private toastr: ToastrService, private hotelService: HotelsService ) {
    this.baseUrl = environment.apiUrl;
  }

  public getUserFavorites(): Observable<string[]> {
    const login: string = sessionStorage.getItem('LOGIN');
    return this.http
      .get<IUserResponse>( `${this.baseUrl}/users/${login}`)
      .pipe(
        map((response: IUserResponse) => {
          this.favorites = response.favorites;
          return response.favorites;
        })
      );
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
          this.toastr.info('', `Hotel "${hotel.title}" added to favorites!`);
        });
    } else if (id) {
      this.http
        .delete<IUserResponse>(
          `${this.baseUrl}/users/favorites/${id}`,
        )
        .subscribe( (response: IUserResponse) => {
            this.favorites = response.favorites;
            this.toastr.info('', `Hotel "${hotel.title}" removed from favorites!`);
          }
        );
    }
  }

  public getFavoritesHotels(): IHotel[] {
    return this.favorites.map((id: string) => this.hotelService.getHotelById(id));
  }

  public getFavoritesCount(): number {
    return this.favorites.length;
  }

  public hotelInFavorites(hotelId: string): boolean {
    return this.favorites.some((favoriteId: string) => favoriteId === hotelId);
  }
}

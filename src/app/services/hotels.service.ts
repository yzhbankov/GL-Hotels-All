import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { IHotel, IHotelsResponse } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private hotelsUrl: string;
  private dataStore: {
    hotels: IHotel[]
  };

  public constructor(private http: HttpClient) {
    this.hotelsUrl = environment.apiUrl;
    this.dataStore = { hotels: [] };
  }

  public loadAll(): Observable<IHotel[]> {
    return this.http
      .get<IHotelsResponse[]>( `${this.hotelsUrl}/hotels`)
      .pipe(
        map((response: IHotelsResponse[]) => {
          const hotels: IHotel[] = response.map((_hotel: IHotelsResponse) => _hotel.hotel)
          this.dataStore.hotels = hotels;
          return hotels;
        })
      );
  }

  public loadById(id: string): Observable<IHotel> {
    return this.http
      .get<IHotelsResponse>( `${this.hotelsUrl}/hotels/${id}`)
      .pipe(
        map((response: IHotelsResponse) => {
          return response.hotel;
        })
      );
  }
}

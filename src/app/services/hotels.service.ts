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
  private baseUrl: string;
  private dataStore: {
    hotels: IHotel[]
  };

  public constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
    this.dataStore = { hotels: [] };
  }

  public getHotelById(id: string): IHotel {
    return this.dataStore.hotels.find((hotel: IHotel) => hotel.id === id);
  }

  public loadAll(): Observable<IHotel[]> {
    return this.http
      .get<IHotelsResponse[]>( `${this.baseUrl}/hotels`)
      .pipe(
        map((response: IHotelsResponse[]) => {
          const hotels: IHotel[] = response.map((_hotel: IHotelsResponse) => ({ ..._hotel.hotel, id: _hotel._id }));
          this.dataStore.hotels = hotels;
          return hotels;
        })
      );
  }

}

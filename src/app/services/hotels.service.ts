import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import { IHotel, IHotelsResponse } from '../models';
import { environment } from '../../environments/environment';
import { HotelsUpdate } from '../store/actions/hotels.actions';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  private baseUrl: string;
  private dataStore: {
    hotels: IHotel[]
  };

  public constructor(private http: HttpClient, private store: Store<IHotel>, private toastr: ToastrService) {
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

  public followTheHotel(id: string): void {
    const hotel: IHotel = this.getHotelById(id);
    if (id) {
      this.http
        .put<IHotelsResponse>(
          `${this.baseUrl}/hotels/follow`,
          { hotelId: id },
          {}
        )
        .subscribe((response: IHotelsResponse) => {
          response.hotel.id = response._id;
          this.store.dispatch(new HotelsUpdate(response.hotel));
          this.toastr.info('', `You follow the hotel: "${hotel.title}"!`);
        });
    }
  }

}

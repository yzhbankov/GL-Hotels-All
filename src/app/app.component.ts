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
  public selectedHotel: IHotel = hotels[0];
  public isDataLoading: boolean = true;
  public activeFilter: string;
  public searchValue: string;

  public constructor(private toastr: ToastrService) {
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

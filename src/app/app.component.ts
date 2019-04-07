import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { IHotel } from './models';
import { HotelsService } from './services/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public hotels: Observable<IHotel[]>;
  public selectedHotel: IHotel;
  public isDataLoading: boolean = true;
  public activeFilter: string;
  public searchValue: string;
  public constructor(private toastr: ToastrService, private hotelsService: HotelsService ) {
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
    this.hotels = this.hotelsService.hotels; // subscribe to entire collection
    this.hotelsService.loadAll();

    this.hotels
      .subscribe((hotels: IHotel[]) => {
          if (!this.selectedHotel && Array.isArray(hotels) && hotels.length > 0) {
            this.selectedHotel = hotels[0];
          }
        },
      () => {
      },
      () => {
        this.isDataLoading = false;
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IHotel } from '../../models';
import { ToastrService } from 'ngx-toastr';
import { HotelsService } from '../../services/hotels.service';
import { FavoritesService } from '../../services/favorites.service';
import { HotelsLoadFromServer } from '../../store/actions/hotels.actions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public hotels$: Observable<IHotel[]>;
  public isDataLoading$: Observable<boolean>;
  public selectedHotel$: Observable<IHotel>;

  public hotels: IHotel[];
  public activeFilter: string;
  public searchValue: string;

  public constructor(
    private store: Store<IHotel[]>,
    private toastr: ToastrService,
    private hotelsService: HotelsService,
    private favoritesService: FavoritesService
  ) {
    this.hotels$ = store.pipe(select('hotels', 'hotels'));
    this.isDataLoading$ = store.pipe(select('hotels', 'hotelsAreLoaded'));
    this.selectedHotel$ = store.pipe(select('hotels', 'selectedHotel'));
  }

  public setActiveFilter(filter: string): void {
    this.activeFilter = filter;
  }

  public setSearchValue(value: string): void {
    this.searchValue = value;
  }

  public ngOnInit(): void {
    this.store.dispatch(new HotelsLoadFromServer());

    this.favoritesService.getUserFavorites()
      .subscribe((favorites: string[]) => {
        console.info('favorites', favorites);
      });
  }
}

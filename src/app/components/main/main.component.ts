import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IHotel } from '../../models';
import * as hotels from '../../store/reducers/hotels.reducer';
import { HotelsLoadFromServer } from '../../store/actions/hotels.actions';
import { UserLoadFromServer } from '../../store/actions/user.actions';
import * as user from '../../store/reducers/user.reducer';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public hotels$: Observable<IHotel[]>;
  public isDataLoading$: Observable<boolean>;
  public selectedHotel$: Observable<IHotel>;
  public favorites$: Observable<IHotel[]>;

  public activeFilter: string;
  public searchValue: string;

  public constructor(private store: Store<hotels.IState | user.IState>) {
    this.hotels$ = store.pipe(select(hotels.selectAllHotels));
    this.favorites$ = store.pipe(select(user.favoritesHotels));
    this.isDataLoading$ = store.pipe(select('hotels', 'isLoading'));
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
    this.store.dispatch(new UserLoadFromServer('admin'));

  }
}

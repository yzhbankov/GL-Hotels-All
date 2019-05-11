import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FavoritesService } from '../../../services/favorites.service';
import { HotelsService } from '../../../services/hotels.service';
import { inFavorites, IState } from '../../../store/reducers/user.reducer';
import { IHotel } from '../../../models';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input() public hotel: IHotel;
  @Input() public index: number;

  public constructor(
    private favoriteService: FavoritesService,
    private store: Store<IState>,
    private hotelsService: HotelsService
  ) { }

  public handleFavorites(id: string, event: Event): void {
    event.stopPropagation();

    this.favoriteService.handleFavorites(id);
  }

  public followTheHotel(id: string, event: Event): void {
    event.stopPropagation();

    this.hotelsService.followTheHotel(id);
  }

  public hasInFavorites(id: string): Observable<boolean> {
    return this.store.pipe(select(inFavorites, id));
  }

  public ngOnInit(): void {  }

}

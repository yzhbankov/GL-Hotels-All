import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FavoritesService } from '../../../services/favorites.service';
import { inFavorites } from '../../../store/reducers/user.reducer';
import { IHotel, IUser } from '../../../models';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  @Input() public hotel: IHotel;
  @Input() public index: number;

  public constructor(private favoriteService: FavoritesService, private store: Store<IUser>) { }

  public handleFavorites(id: string, event: Event): void {
    event.stopPropagation();

    this.favoriteService.handleFavorites(id);
  }

  public hasInFavorites(id: string): Observable<boolean> {
    return this.store.pipe(select(inFavorites, id));
  }

  public ngOnInit(): void {  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { select, Store } from '@ngrx/store';

import { IHotel } from '../../models';
import { favoritesHotels, hasFavorites, IState } from '../../store/reducers/user.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-favorites-modal',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesModal implements OnInit {
  public favorites$: Observable<IHotel[]>;
  public hasFavorites$: Observable<boolean>;

  public constructor(
    public dialogRef: MatDialogRef<FavoritesModal>,
    public store: Store<IState>
  ) {
    this.favorites$ = store.pipe(select(favoritesHotels));
    this.hasFavorites$ = store.pipe(select(hasFavorites));
  }

  public onCloseClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void { }

}

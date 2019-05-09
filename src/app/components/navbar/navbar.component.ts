import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs';

import { favoritesNumber, hasFavorites } from '../../store/reducers/user.reducer';
import { FavoritesModal } from '../../modals/favorites/favorites.component';
import { AuthService } from '../../services/auth.service';
import { IUser } from '../../models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public favoritesCount$: Observable<number>;
  public hasFavorites$: Observable<boolean>;
  public user: IUser;

  public constructor(
    private store: Store<IUser>,
    public dialog: MatDialog,
    private auth: AuthService
  ) {
    this.favoritesCount$ = store.pipe(select(favoritesNumber));
    this.hasFavorites$ = store.pipe(select(hasFavorites));
  }

  public logOut(): void {
    this.auth.logOut();
  }

  public handleFavoriteClick(): void {
      const dialogRef = this.dialog.open(FavoritesModal, {
        width: '600px',
        data: {}
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public ngOnInit(): void {}

}

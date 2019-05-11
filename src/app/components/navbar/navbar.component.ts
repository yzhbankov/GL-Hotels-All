import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs';
import * as RouterActions from '../../store/actions/router.actions';
import { favoritesNumber, hasFavorites, IState } from '../../store/reducers/user.reducer';
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
  public user$: Observable<IUser>;
  public isLoggined$: Observable<boolean>;

  public constructor(
    private store: Store<IState>,
    public dialog: MatDialog,
    private auth: AuthService
  ) {
    this.favoritesCount$ = store.pipe(select(favoritesNumber));
    this.hasFavorites$ = store.pipe(select(hasFavorites));
    this.isLoggined$ = store.pipe(select('user', 'authenticated'));
    this.user$ = store.pipe(select('user', 'data'));
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

  public navigateTo(path: string): void {
    this.store.dispatch(new RouterActions.Go({ path: [path] }));
  }

  public ngOnInit(): void {}

}

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { FavoritesService } from '../../services/favorites.service';
import { MatDialog } from '@angular/material';
import { FavoritesModal } from '../../modals/favorites/favorites.component';
import { AuthService } from '../../services/auth.service';
import {IHotel, IUser} from '../../models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public user$: Observable<IUser>;
  public user: IUser;

  public constructor(
    private store: Store<IUser>,
    private favoriteService: FavoritesService,
    public dialog: MatDialog,
    private auth: AuthService
  ) {
    this.user$ = store.pipe(select('user', 'user'));
  }

  public getFavoritesCount(): number {
    return this.favoriteService.getFavoritesCount();
  }

  public hasFavorites(): boolean {
    return this.favoriteService.getFavoritesCount() > 0;
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

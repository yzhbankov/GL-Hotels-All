import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { FavoritesComponent } from './favorites/favorites.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public constructor(private favoriteService: FavoritesService, public dialog: MatDialog) {}

  public getFavoritesCount(): number {
    return this.favoriteService.getFavoritesCount();
  }

  public hasFavorites(): boolean {
    return this.favoriteService.getFavoritesCount() > 0;
  }

  public handleFavoriteClick(): void {
      const dialogRef = this.dialog.open(FavoritesComponent, {
        width: '600px',
        data: {}
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public ngOnInit(): void {}

}

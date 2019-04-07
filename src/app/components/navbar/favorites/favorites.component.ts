import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FavoritesService } from '../../../services/favorites.service';
import { IHotel } from '../../../models';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  public favorites: IHotel[] = [];

  public constructor(
    public dialogRef: MatDialogRef<FavoritesComponent>,
    private favoriteService: FavoritesService
  ) {}

  public onCloseClick(): void {
    this.dialogRef.close();
  }

  public ngOnInit(): void {
    this.favorites = this.favoriteService.getFavorites();
  }

}

import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { FavoritesComponent } from './favorites/favorites.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public constructor(private favoriteService: FavoritesService) {}

  public getFavoritesCount(): number {
    return this.favoriteService.getFavoritesCount();
  }

  public hasFavorites(): boolean {
    return this.favoriteService.getFavoritesCount() > 0;
  }

  public handleFavoriteClick(): void {
    alert('click')
  }

  public ngOnInit(): void {}

}

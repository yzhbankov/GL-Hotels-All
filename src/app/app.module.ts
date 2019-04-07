import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatListModule } from '@angular/material';


import { AppRoutingModule } from './app-routing.module';
import { HotelsModule } from './components/hotels/hotels.module';
import { FilterPipe, SearchPipe } from './pipes/filter.pipe';
import { FavoritesService } from './services/favorites.service';
import { HotelsService } from './services/hotels.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritesComponent } from './components/navbar/favorites/favorites.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  entryComponents: [FavoritesComponent],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FilterPipe,
    SearchPipe,
    FavoritesComponent,
    NavbarComponent,
  ],
  imports: [
    MatListModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HotelsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
  ],
  providers: [HotelsService, FavoritesService, { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }

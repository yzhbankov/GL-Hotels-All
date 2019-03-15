import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { HotelsModule } from './hotels/hotels.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { FilterPipe, SearchPipe } from './filter.pipe';
import { FavoritesService } from './favorites.service';
import { FavoritesComponent } from './header/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    FilterPipe,
    SearchPipe,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HotelsModule,
    ToastrModule.forRoot(),
  ],
  providers: [FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { HotelsModule } from './components/hotels/hotels.module';
import { FilterPipe, SearchPipe } from './pipes/filter.pipe';
import { FavoritesService } from './services/favorites.service';
import { HotelsService } from './services/hotels.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FavoritesComponent } from './components/navbar/favorites/favorites.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { TokenInterceptor } from './interceprors/token.interceptor';

@NgModule({
  entryComponents: [FavoritesComponent],
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    FilterPipe,
    SearchPipe,
    FavoritesComponent,
    NavbarComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    HotelsService,
    FavoritesService,
    {provide: MatDialogRef, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

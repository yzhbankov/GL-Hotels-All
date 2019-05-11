import { MatListModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { FilterPipe, SearchPipe } from './pipes/filter.pipe';


// Guards
import { AuthGuardService } from './guards/auth.guard';
// Interceptors
import { TokenInterceptor } from './interceprors/token.interceptor';
// Services
import { FavoritesService } from './services/favorites.service';
import { HotelsService } from './services/hotels.service';
// Effects
import { HotelsEffects } from './effects/hotels.effects';
import { AuthEffects } from './effects/auth.effects';
import { RouterEffects } from './effects/router.effects';
// Reducers
import { reducers } from './store/reducers';
import { metaReducers } from './store/reducers/meta.resucers';
// Components
import { HotelsModule } from './components/hotels/hotels.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ContainerComponent } from './components/container/container.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';
import { FavoritesModal } from './modals/favorites/favorites.component';
import { ContactModal } from './modals/contact/contact.component';

import { environment } from '../environments/environment';
import { CustomSerializer } from './custom-route-serializer';

@NgModule({
  entryComponents: [FavoritesModal, ContactModal],
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    FilterPipe,
    SearchPipe,
    FavoritesModal,
    ContactModal,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    ContainerComponent,
    ContactComponent,
  ],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    EffectsModule.forRoot([HotelsEffects, AuthEffects, RouterEffects]),
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
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
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
    AuthGuardService,
    {provide: MatDialogRef, useValue: {}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

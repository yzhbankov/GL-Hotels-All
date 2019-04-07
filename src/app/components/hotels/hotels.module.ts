import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material';

import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { HotelComponent } from './hotel/hotel.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [WeatherComponent, ProfileComponent, ListComponent, HotelComponent, DetailsComponent],
  imports: [
    CommonModule,
    MatListModule,
  ],
  exports: [ListComponent, DetailsComponent, HotelComponent]
})
export class HotelsModule { }

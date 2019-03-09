import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  declarations: [WeatherComponent, ProfileComponent, ListComponent, HotelComponent],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [ListComponent]
})
export class HotelsModule { }

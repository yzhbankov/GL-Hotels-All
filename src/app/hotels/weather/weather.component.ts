import { Component, OnInit, Input } from '@angular/core';
import { IWeather } from '../models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() public weather: IWeather;

  ngOnInit(): void {
  }

}

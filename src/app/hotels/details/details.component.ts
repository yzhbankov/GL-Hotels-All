import { Component, OnInit, Input } from '@angular/core';
import { IHotel } from '../models';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() hotel: IHotel;

  constructor() { }

  ngOnInit() {
  }

}

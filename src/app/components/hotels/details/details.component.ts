import { Component, Input, OnInit } from '@angular/core';
import { IHotel } from '../../../models';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input()
  public hotel: IHotel;

  public ngOnInit(): void {
  }

}

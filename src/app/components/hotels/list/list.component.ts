import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public hotels: IHotel[];
  @Input() public isDataLoading: boolean;

  @Output() public hotel: EventEmitter<IHotel> = new EventEmitter();

  public selectHotel(hotel: IHotel): void {
    this.hotel.emit(hotel);
  }

  public ngOnInit(): void {  }

}

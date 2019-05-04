import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IHotel } from '../../../models';
import { HotelsSelect } from '../../../store/actions/hotels.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public hotels: IHotel[];
  @Input() public isDataLoading: boolean;

  @Output() public hotel: EventEmitter<IHotel> = new EventEmitter();

  constructor(private store: Store<IHotel>) {}

  public selectHotel(hotel: IHotel): void {
    this.store.dispatch(new HotelsSelect(hotel));
  }

  public ngOnInit(): void {
    console.log('asdasdadasdad', this.isDataLoading);
  }

}

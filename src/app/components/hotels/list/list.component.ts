import { Store } from '@ngrx/store';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IApplicationState, IHotel } from '../../../models';
import { HotelsSelect } from '../../../store/actions/hotels.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() public hotels: IHotel[];

  @Output() public hotel: EventEmitter<IHotel> = new EventEmitter();

  public constructor(private store: Store<IApplicationState>) {}

  public selectHotel(hotel: IHotel): void {
    this.store.dispatch(new HotelsSelect(hotel));
  }

  public ngOnInit(): void { }

}

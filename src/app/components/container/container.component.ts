import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { HotelsLoadFromServer } from '../../store/actions/hotels.actions';
import * as hotels from '../../store/reducers/hotels.reducer';
import * as user from '../../store/reducers/user.reducer';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  public constructor(private store: Store<hotels.IState | user.IState>) {
  }

  public ngOnInit(): void {
    this.store.dispatch(new HotelsLoadFromServer());
    // this.store.dispatch(new UserLoadFromServer('admin'));
  }
}

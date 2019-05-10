import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as hotels from './store/reducers/hotels.reducer';
import * as user from './store/reducers/user.reducer';
import { UserCheckLogin } from './store/actions/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public isLoggined$: Observable<boolean>;

  public constructor(private store: Store<hotels.IState | user.IState>) {
    this.isLoggined$ = store.pipe(select('user', 'authenticated'));
  }

  public ngOnInit(): void {
      this.store.dispatch(new UserCheckLogin());
  }

}

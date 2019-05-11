import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import * as fromHotels from './hotels.reducer';
import * as fromUser from './user.reducer';

export interface IState {
  hotels: fromHotels.IState;
  user: fromUser.IState;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<IState> = {
  hotels: fromHotels.hotelsReducer,
  user: fromUser.userReducer,
  router: routerReducer
};

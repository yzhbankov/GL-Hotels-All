import { ActionReducerMap } from '@ngrx/store';

import * as fromHotels from './hotels.reducer';
import * as fromUser from './user.reducer';

export interface IState {
  hotels: fromHotels.IState;
  user: fromUser.IState;
}

export const reducers: ActionReducerMap<IState> = {
  hotels: fromHotels.hotelsReducer,
  user: fromUser.userReducer,
};

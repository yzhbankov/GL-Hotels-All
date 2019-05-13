import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import { environment } from '../../../environments/environment';
import { ActionTypes } from '../actions/user.actions';
import { IApplicationState } from '../../models';

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return storeLogger()(reducer);
}

function clearState(reducer) {
  return function (state: IApplicationState, action: Action) {

    if (action.type === ActionTypes.Logout) {
      state = undefined;
    }

    return reducer(state, action);
  };
}

const reducers: MetaReducer<any>[] = [logger];

reducers.push(clearState);

export const metaReducers: MetaReducer<any>[] = reducers;

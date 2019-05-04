import { ActionsUnion, ActionTypes } from '../actions/user.actions';
import { IUser } from '../../models';

export interface State {
  isUserLogged: boolean;
  user: IUser;
}

export const initialState: State = {
  isUserLogged: false,
  user: null
};

export function userReducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        user: action.payload,
        isUserLogged: true
      };

    case ActionTypes.LOGOUT:
      return { ...initialState };

    default:
      return state;
  }
}

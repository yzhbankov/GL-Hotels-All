import { Action } from '@ngrx/store';
import { IUser } from '../../models';

export enum ActionTypes {
  LOGIN = '[User] Login',
  LOGOUT = '[User] Logout',
}

export class UserLogin implements Action {
  readonly type = ActionTypes.LOGIN;
  constructor( public payload: IUser ) {}
}

export class UserLogout implements Action {
  readonly type = ActionTypes.LOGOUT;
}

export type ActionsUnion = UserLogin | UserLogout;

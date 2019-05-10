import { Action } from '@ngrx/store';
import { IUser } from '../../models';

export enum ActionTypes {
  Login = '[User] Login',
  Logout = '[User] Logout',
  HandleFavorites = '[User Favorites] Handle',
  CheckLogin = '[User] Check Login'
}

export class UserCheckLogin implements Action {
  readonly type = ActionTypes.CheckLogin;
}

export class UserLogin implements Action {
  readonly type = ActionTypes.Login;
  constructor( public payload: IUser ) {}
}

export class UserLogout implements Action {
  readonly type = ActionTypes.Logout;
}

export class HandleFavorites implements Action {
  readonly type = ActionTypes.HandleFavorites;
  constructor(public payload: string[]) {}
}

export type ActionsUnion = UserLogin | UserLogout | HandleFavorites;

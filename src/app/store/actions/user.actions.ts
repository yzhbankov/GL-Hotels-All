import { Action } from '@ngrx/store';
import { IUser } from '../../models';

export enum ActionTypes {
  Login = '[User] Login',
  Logout = '[User] Logout',
  LoadFromServer = '[User] Load from server',
  UserSet = '[User] Set',
  HandleFavorites = '[User Favorites] Handle',
}

export class UserLoadFromServer implements Action {
  readonly type = ActionTypes.LoadFromServer;
  constructor(public payload: string) {}
}

export class UserSet implements Action {
  readonly type = ActionTypes.UserSet;
  constructor(public payload: IUser) {}
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

export type ActionsUnion = UserLogin | UserLogout | UserSet | UserLoadFromServer | HandleFavorites;

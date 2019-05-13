import { Action } from '@ngrx/store';
import { IUser } from '../../models';

export enum ActionTypes {
  Authenticate = '[User] Authenticate',
  LoginFails = '[User] Login Fails',
  Login = '[User] Login',
  Logout = '[User] Logout',
  HandleFavorites = '[User Favorites] Handle',
  CheckLogin = '[User] Check Login'
}

export class UserAuthenticate implements Action {
  readonly type = ActionTypes.Authenticate;
  constructor(public payload: { password: string, email: string }) {}
}

export class UserLoginFails implements Action {
  readonly type = ActionTypes.LoginFails;
  constructor(public payload: string) {}
}

export class UserCheckLogin implements Action {
  readonly type = ActionTypes.CheckLogin;
}

export class UserLogin implements Action {
  readonly type = ActionTypes.Login;
  constructor(public payload: IUser ) {}
}

export class UserLogout implements Action {
  readonly type = ActionTypes.Logout;
}

export class HandleFavorites implements Action {
  readonly type = ActionTypes.HandleFavorites;
  constructor(public payload: string[]) {}
}

export type ActionsUnion = UserLogin | UserLogout | HandleFavorites | UserAuthenticate | UserLoginFails;

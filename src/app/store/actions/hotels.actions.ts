import { Action } from '@ngrx/store';
import { IHotel } from '../../models';

export enum ActionTypes {
  SET = '[Hotels] Set',
  CLEAR = '[Hotels] Clear',
  UPDATE = '[Hotels] Update',
  SELECT_HOTEL = '[Hotels] Select hotel',
  LOAD_FROM_SERVER = '[Hotels] Load From Server',
}

export class HotelsLoadFromServer implements Action {
  readonly type = ActionTypes.LOAD_FROM_SERVER;
}

export class HotelsSet implements Action {
  readonly type = ActionTypes.SET;
  constructor( public payload: IHotel [] ) {}
}

export class HotelsClear implements Action {
  readonly type = ActionTypes.CLEAR;
}

export class HotelsUpdate implements Action {
  readonly type = ActionTypes.UPDATE;
  constructor (public payload: IHotel ) {}
}

export class HotelsSelect implements Action {
  readonly type = ActionTypes.SELECT_HOTEL;
  constructor (public payload: IHotel ) {}
}


export type ActionsUnion = HotelsSet | HotelsClear | HotelsUpdate | HotelsSelect | HotelsLoadFromServer;

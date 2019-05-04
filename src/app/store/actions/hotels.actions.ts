import { Action } from '@ngrx/store';
import { IHotel } from '../../models';

export enum ActionTypes {
  SET = '[Hotels] Set',
  CLEAR = '[Hotels] Clear',
  UPDATE = '[Hotels] Update',
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


export type ActionsUnion = HotelsSet | HotelsClear | HotelsUpdate;

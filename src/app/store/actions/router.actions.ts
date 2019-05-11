import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO: string = '[Router] Go';
export const BACK: string = '[Router] Back';
export const FORWARD: string = '[Router] Forward';

export class Go implements Action {
  public readonly type = GO;

  public constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class Back implements Action {
  public readonly type = BACK;
}

export class Forward implements Action {
  public readonly type = FORWARD;
}

export type Actions = Go | Back | Forward;


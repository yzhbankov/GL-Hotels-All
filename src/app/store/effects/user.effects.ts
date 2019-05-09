import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, delay, map, mergeMap } from 'rxjs/operators';

import { UserService } from '../../services/user.service';
import { ActionTypes, UserLoadFromServer, UserSet } from '../actions/user.actions';
import { IUser } from '../../models';

@Injectable()
export class UserEffects {


  @Effect()
  public loadUser$ = this.actions$
    .pipe(
      ofType(ActionTypes.LoadFromServer),
      mergeMap((action: UserLoadFromServer) => this.userService.loadUser(action.payload)
        .pipe(
          delay(3000),
          map((user: IUser) => (new UserSet(user)),
          catchError(() => EMPTY)
        ))
    )
);
  public constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}

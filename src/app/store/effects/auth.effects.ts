import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { ActionTypes, UserLogin } from '../actions/user.actions';
import { IUser } from '../../models';

@Injectable()
export class AuthEffects {

  @Effect()
  public checkAuth$ = this.actions$
    .pipe(
      ofType(ActionTypes.CheckLogin),
      mergeMap(() => this.authService.userAuthorized()
        .pipe(
          map((user: IUser) => (new UserLogin(user)),
            catchError(() => EMPTY)
          ))
      )
    );
  public constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}

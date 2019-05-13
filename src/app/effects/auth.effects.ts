import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { ActionTypes, UserLogin, UserLoginFails } from '../store/actions/user.actions';
import { UserAuthenticate } from '../store/actions/user.actions';
import { ILoginResponse, IUser } from '../models';
import { SESSION_STORAGE } from '../../common/constants';
import * as RouterActions from '../store/actions/router.actions';

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

  @Effect()
  public authenticate$ = this.actions$
    .pipe(
      ofType(ActionTypes.Authenticate),
      mergeMap((action: UserAuthenticate) => this.authService.logIn(action.payload)
        .pipe(
          map((response: ILoginResponse) => {
              sessionStorage.clear();
              sessionStorage.setItem(SESSION_STORAGE.EMAIL, response.user.email);
              sessionStorage.setItem(SESSION_STORAGE.LOGIN, response.user.login);
              sessionStorage.setItem(SESSION_STORAGE.TOKEN, response.token);
              return response;
            }),
          switchMap((response: ILoginResponse) => [new UserLogin(response.user), new RouterActions.Go({path: ['']})]),
          catchError(() => of(new UserLoginFails('Invalid email or password')))
        )
      )
    );
  public constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}

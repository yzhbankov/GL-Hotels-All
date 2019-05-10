import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';

import { AuthService } from '../services/auth.service';
import { IApplicationState, IUser } from '../models';
import { UserLogout } from '../store/actions/user.actions';

@Injectable()
export class AuthGuardService implements CanActivate {
  private authenticated: boolean;
  public constructor(private auth: AuthService, private router: Router, private store: Store<IApplicationState>) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.auth.userAuthorized().pipe(
      map((response: IUser) => {
        if (response) {
          return true;
        }
      }),
      catchError((error: Error) => {

        this.store.pipe(select('user', 'authenticated'))
          .subscribe((authenticated: boolean) => {
            this.authenticated = authenticated;
          });

        if (this.authenticated) {
          this.store.dispatch(new UserLogout());
        }

        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}

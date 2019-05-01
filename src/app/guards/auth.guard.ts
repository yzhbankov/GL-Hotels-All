import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  public constructor(private auth: AuthService, private router: Router) {}

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>  {
    return this.auth.isUserAuthorized().pipe(
      map((response: Response) => {
        if (response) {
          return true;
        }
      }),
      catchError((error: Error) => {
        this.router.navigate(['/login']);
        return of(false);
      })
    );
  }
}

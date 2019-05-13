import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { UserLogout } from '../store/actions/user.actions';
import { ILoginBody, ILoginResponse, IUser } from '../models';
import { environment } from '../../environments/environment';
import { SESSION_STORAGE } from '../../common/constants';
import * as RouterActions from '../store/actions/router.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;

  public constructor(private http: HttpClient, private router: Router, private store: Store<IUser>) {
    this.baseUrl = environment.apiUrl;
  }

  public logIn(loginBody: ILoginBody): Observable<any> {
    const email: string = loginBody.email;
    const password: string = loginBody.password;

    return this.http.post<ILoginResponse>(
      `${this.baseUrl}/auth/login`,
      { password, email },
      {headers: {}}
    );
  }

  public logOut(): void {
    sessionStorage.clear();
    this.store.dispatch(new UserLogout());
    this.store.dispatch(new RouterActions.Go({
      path: ['/login'],
      // query: { page: 1 },
      // extras: { replaceUrl: false }
    }));
  }

  public getToken(): string {
    return sessionStorage.getItem(SESSION_STORAGE.TOKEN);
  }

  public userAuthorized(): Observable<any> {
    if (!this.getToken()) {
      return throwError('Not authorized');
    }
    return this.http.get(
      `${this.baseUrl}/auth/check_token`,
      {headers: {responseType: 'text'}}
    );
  }
}

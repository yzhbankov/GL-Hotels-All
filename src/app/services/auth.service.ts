import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

import { ILoginBody, ILoginResponse, IUser } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string;
  private user: IUser;

  public constructor(private http: HttpClient, private router: Router) {
    this.baseUrl = environment.apiUrl;
  }

  public logIn(loginBody: ILoginBody): void {
    const email: string = loginBody.email;
    const password: string = loginBody.password;

    this.http.post<ILoginResponse>(
      `${this.baseUrl}/auth/login`,
      { password, email },
      {headers: {}}
    ).subscribe((response: ILoginResponse) => {
      sessionStorage.clear();
      sessionStorage.setItem('EMAIL', response.user.email);
      sessionStorage.setItem('LOGIN', response.user.login);
      sessionStorage.setItem('TOKEN', response.token);

      this.user = response.user;
      this.router.navigate(['main']);
    },
      catchError((error: Error) => {
        return of(error);
      })
    );
  }

  public logOut(): void {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  public getToken(): string {
    return sessionStorage.getItem('TOKEN');
  }

  public isUserAuthorized(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/auth/check_token`,
      {headers: {responseType: 'text'}}
    );
  }
}

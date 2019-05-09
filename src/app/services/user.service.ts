import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IUserResponse } from '../models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string;

  public constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }

  public loadUser(login: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/users/${login}`,
      {headers: {responseType: 'text'}}
    )
      .pipe(
      map((response: IUserResponse) => {
        return response;
      })
    );
  }
}

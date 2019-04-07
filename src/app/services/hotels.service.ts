import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { IHotel, IHotelsResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  public hotels: Observable<IHotel[]>;
  private _hotels: BehaviorSubject<IHotel[]>;
  private hotelsUrl: string;
  private dataStore: {
    hotels: IHotel[]
  };

  public constructor() {
    this.hotelsUrl = 'https://gl-hotels.herokuapp.com';
    this.dataStore = { hotels: [] };
    this._hotels = new BehaviorSubject([]);
    this.hotels = this._hotels.asObservable();
  }

  public loadAll(): void {
    ajax({
      url: `${this.hotelsUrl}/auth/login`,
      method: 'POST',
      headers: { },
      body: { password: 'admin', email: 'admin@admin.com'}
    }).pipe(
      map((res: AjaxResponse) => {
        const { response } = res;
        return response.token;
      }),
      mergeMap((token: string) => ajax({
        url: `${this.hotelsUrl}/hotels`,
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
        body: { }
      })),
      catchError((error: Error) => {
        console.error('errors: ', error);
        return of(error);
      })
    )
      .subscribe((res: AjaxResponse) => {
        this.dataStore.hotels = res.response.map((responseHotel: IHotelsResponse) => responseHotel.hotel);
        this._hotels.next(Object.assign({}, this.dataStore).hotels);
        this._hotels.complete();
      }, (error: Error) => console.error('Could not load hotels.'));
  }

  // load(id: number | string) {
  //   this.http.get(`${this.baseUrl}/todos/${id}`).subscribe(data => {
  //     let notFound = true;
  //
  //     this.dataStore.todos.forEach((item, index) => {
  //       if (item.id === data.id) {
  //         this.dataStore.todos[index] = data;
  //         notFound = false;
  //       }
  //     });
  //
  //     if (notFound) {
  //       this.dataStore.todos.push(data);
  //     }
  //
  //     this._todos.next(Object.assign({}, this.dataStore).todos);
  //   }, error => console.log('Could not load todo.'));
  // }
  //
  // create(todo: Todo) {
  //   this.http.post(`${this.baseUrl}/todos`, JSON.stringify(todo)).subscribe(data => {
  //     this.dataStore.todos.push(data);
  //     this._todos.next(Object.assign({}, this.dataStore).todos);
  //   }, error => console.log('Could not create todo.'));
  // }
  //
  // update(todo: Todo) {
  //   this.http.put(`${this.baseUrl}/todos/${todo.id}`, JSON.stringify(todo))
  //     .subscribe(data => {
  //       this.dataStore.todos.forEach((t, i) => {
  //         if (t.id === data.id) { this.dataStore.todos[i] = data; }
  //       });
  //
  //       this._todos.next(Object.assign({}, this.dataStore).todos);
  //     }, error => console.log('Could not update todo.'));
  // }
  //
  // remove(todoId: number) {
  //   this.http.delete(`${this.baseUrl}/todos/${todoId}`).subscribe(response => {
  //     this.dataStore.todos.forEach((t, i) => {
  //       if (t.id === todoId) { this.dataStore.todos.splice(i, 1); }
  //     });
  //
  //     this._todos.next(Object.assign({}, this.dataStore).todos);
  //   }, error => console.log('Could not delete todo.'));
  // }
}

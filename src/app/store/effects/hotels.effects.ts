import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import {catchError, delay, map, mergeMap} from 'rxjs/operators';

import { HotelsService } from '../../services/hotels.service';
import { ActionTypes, HotelsSet } from '../actions/hotels.actions';
import { IHotel } from '../../models';

@Injectable()
export class HotelsEffects {

  @Effect()
  loadHotels$ = this.actions$
    .pipe(
      ofType(ActionTypes.LOAD_FROM_SERVER),
      mergeMap(() => this.hotelsService.loadAll()
        .pipe(
          map((hotels: IHotel[]) => (new HotelsSet(hotels)),
          catchError(() => EMPTY)
        ))
    )
);

  public constructor(
    private actions$: Actions,
    private hotelsService: HotelsService
  ) {}
}

import {createFeatureSelector, createSelector, MemoizedSelector, SelectorWithProps} from '@ngrx/store';

import { ActionsUnion, ActionTypes } from '../actions/hotels.actions';
import { IHotel } from '../../models';

export interface IState {
  isLoading: boolean;
  selectedHotel: IHotel;
  byId: {
    [key: string]: IHotel
  };
  allIds: string[];
}

export const initialState: IState = {
  isLoading: false,
  selectedHotel: null,
  byId: {},
  allIds: []
};

export function hotelsReducer(state: IState = initialState, action: ActionsUnion): IState {
  switch (action.type) {
    case ActionTypes.LOAD_FROM_SERVER:
      return {
        ...state,
        isLoading: true,
      };

    case ActionTypes.SET:
      return {
        isLoading: false,
        selectedHotel: action.payload ? action.payload[0] : state.selectedHotel,
        byId: action.payload.reduce((memo: IState['byId'], hotel: IHotel) => {
          return {...memo, ...{[hotel.id]: hotel}};
        }, {}),
        allIds: action.payload.map((hotel: IHotel) => hotel.id)
      };

    case ActionTypes.SELECT_HOTEL:
      return {
        ...state,
        selectedHotel: action.payload,
      };

    case ActionTypes.CLEAR:
      return { ...initialState };

    case ActionTypes.UPDATE: {
      const hotel: IHotel = action.payload;
      const hotels: IState['byId'] = {...state.byId};
      hotels[hotel.id] = hotel;
      return {
        ...state,
        byId: hotels
      };
    }

    default:
      return state;
  }
}


export const hotelsFeatureSelector: MemoizedSelector<IState, null> = createFeatureSelector('hotels');

export const selectAllHotels: MemoizedSelector<IState, IHotel[]> = createSelector(
  hotelsFeatureSelector,
  (hotels: IState) => Object.values(hotels.byId)
);

export const isLoading: MemoizedSelector<IState, boolean> = createSelector(
  hotelsFeatureSelector,
  (hotels: IState) => hotels.isLoading
);

export const selectedHotel: MemoizedSelector<IState, IHotel> = createSelector(
  hotelsFeatureSelector,
  (hotels: IState) => hotels.selectedHotel
);

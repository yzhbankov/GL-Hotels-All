import { createFeatureSelector, createSelector, MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';

import { ActionsUnion, ActionTypes } from '../actions/user.actions';
import * as Hotels from '../reducers/hotels.reducer';
import { IHotel, IUser } from '../../models';

export interface IState {
  loading: boolean;
  error: string | null;
  authenticated: boolean;
  data: IUser;
}

export const initialState: IState = {
  loading: false,
  error: null,
  authenticated: false,
  data: null
};

export function userReducer(state: IState = initialState, action: ActionsUnion): IState {
  switch (action.type) {
    case ActionTypes.Authenticate: {
      return {
        ...state,
        loading: true,
      };
    }

    case ActionTypes.LoginFails: {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
    case ActionTypes.Login:
      return {
        error: null,
        data: action.payload,
        authenticated: true,
        loading: false,
      };

    case ActionTypes.HandleFavorites:
      return {
        ...state,
        data: {
          ...state.data,
          favorites: action.payload
        },
      };

    case ActionTypes.Logout:
      return { ...initialState };

    default:
      return state;
  }
}

export const hotelsFeatureSelector: MemoizedSelector<IState, null> = createFeatureSelector('hotels');
export const userFeatureSelector: MemoizedSelector<IState, null> = createFeatureSelector('user');

export const favoritesHotels: MemoizedSelector<IState, IHotel[]> = createSelector(
  userFeatureSelector,
  hotelsFeatureSelector,
  (user: IState, hotels: Hotels.IState) => {
    if (user.data && user.data.favorites) {
      return user.data.favorites.map((hotelId: string) =>  {
        return hotels.byId[hotelId];
      });
    }
    return [];
  }
);

export const favoritesNumber: MemoizedSelector<IState, number> = createSelector(
  userFeatureSelector,
  (user: IState) => {
    if (user.data && user.data.favorites) {
      return user.data.favorites.length;
    }
    return 0;
  }
);

export const hasFavorites: MemoizedSelector<IState, boolean> = createSelector(
  userFeatureSelector,
  (user: IState) => {
    if (user.data && user.data.favorites) {
      return user.data.favorites.length > 0;
    }
    return false;
  }
);


export const inFavorites: MemoizedSelectorWithProps<IState, string, boolean> = createSelector(
  userFeatureSelector,
  (user: IState, id: string) => {
    if (user.data && user.data.favorites) {
      return user.data.favorites.includes(id);
    }
    return false;
  }
);

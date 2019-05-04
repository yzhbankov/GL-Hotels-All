import { ActionsUnion, ActionTypes } from '../actions/hotels.actions';
import { IHotel } from '../../models';

export interface State {
  hotelsAreLoaded: boolean;
  hotels: IHotel[];
}

export const initialState: State = {
  hotelsAreLoaded: false,
  hotels: []
};

export function hotelsReducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.SET:
      return {
        hotelsAreLoaded: true,
        hotels: action.payload
      };

    case ActionTypes.CLEAR:
      return { ...initialState };

    case ActionTypes.UPDATE: {
      const hotel: IHotel = action.payload;
      const hotels: IHotel[] = state.hotels.reduce((memo: IHotel[], _hotel: IHotel) => {
        if (_hotel.id === hotel.id) {
          memo.push(hotel);
        } else {
          memo.push(_hotel);
        }
        return memo;
      }, []);
      return {
        ...state,
        hotels
      };
    }

    default:
      return state;
  }
}

import { ActionsUnion, ActionTypes } from '../actions/hotels.actions';
import { IHotel } from '../../models';

export interface State {
  hotelsAreLoaded: boolean;
  selectedHotel: IHotel;
  hotels: IHotel[];
}

export const initialState: State = {
  hotelsAreLoaded: false,
  selectedHotel: null,
  hotels: []
};

export function hotelsReducer(state = initialState, action: ActionsUnion): State {
  switch (action.type) {
    case ActionTypes.SET:
      return {
        hotelsAreLoaded: true,
        selectedHotel: action.payload ? action.payload[0] : state.selectedHotel,
        hotels: action.payload
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

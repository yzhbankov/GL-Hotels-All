import * as user from '../store/reducers/user.reducer';
import * as hotels from '../store/reducers/hotels.reducer';

export interface IWeather {
  temperature: number;
  wind: number;
  icon: string;
}

export interface IProfile {
  followers: number;
  following: number;
  photo: string;
}

export interface IHotel {
  id: string;
  title: string;
  address: string;
  description: string;
  phone: string;
  picture: string;
  photos: string[];
  weather: IWeather;
  profile: IProfile;
  stars: number;
}

export interface ILoginResponse {
  token: string;
  user: IUser;
}

export interface ILoginBody {
  email: string;
  password: string;
}

export interface IHotelsResponse {
  _id: string;
  hotel: IHotel;
  createdBy: {
    email: string
  };
  createdAt: string;
  updatedAt: string;
}

export interface IUserResponse {
  login: string;
  avatarUrl: string;
  hotels: string[];
  favorites: string[];
}


export interface IUser {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  removedAt: string;
  login: string;
  firstName: string;
  lastName: string;
  hotels: string[];
  favorites: string[];
}


export interface IApplicationState {
  user: user.IState;
  hotels: hotels.IState;
}

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
  id: number;
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
  user: {
    _id: string;
    email: string;
    createdAt: string;
    removedAt: string;
    updatedAt: string;
    firstName: string;
    lastName: string;
    login: string;
  };
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

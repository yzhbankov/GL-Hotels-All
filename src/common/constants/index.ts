interface IFilters {
  SHOW_ALL: string;
  SHOW_THREE_STARS: string;
  SHOW_FOUR_STARS: string;
  SHOW_FIVE_STARS: string;
}

export const FILTERS: IFilters = {
  SHOW_ALL: 'All',
  SHOW_THREE_STARS: '3*',
  SHOW_FOUR_STARS: '4*',
  SHOW_FIVE_STARS: '5*'
};

interface IStorageKeys {
  TOKEN: string;
  EMAIL: string;
  LOGIN: string;
}

export const SESSION_STORAGE: IStorageKeys = {
  TOKEN: 'TOKEN',
  EMAIL: 'EMAIL',
  LOGIN: 'LOGIN'
};

interface IFilters {
  [key: string]: string;
}

export const FILTERS: IFilters = {
  SHOW_FAVORITES: 'Favorites',
  SHOW_ALL: 'All',
  SHOW_THREE_STARS: '3*',
  SHOW_FOUR_STARS: '4*',
  SHOW_FIVE_STARS: '5*'
};

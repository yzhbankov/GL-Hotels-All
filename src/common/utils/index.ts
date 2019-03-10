import { FILTERS } from '../constants';

export function getNumberValueFromString(filter: string): number {
  switch (filter) {
    case FILTERS.SHOW_ALL: {
      return null
    }
    case FILTERS.SHOW_THREE_STARS: {
      return 3
    }
    case FILTERS.SHOW_FOUR_STARS: {
      return 4
    }
    case FILTERS.SHOW_FIVE_STARS: {
      return 5
    }
    default: {
      return null
    }
  }
}

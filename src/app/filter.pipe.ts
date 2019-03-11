import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from './hotels/models';
import { FILTERS } from '../common/constants';
import { getNumberValueFromString } from '../common/utils';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(hotels: IHotel[], favorites: IHotel[], filter: string): IHotel[] {
    if (filter === FILTERS.SHOW_FAVORITES) {
      return favorites
    }

    const numericStars = getNumberValueFromString(filter);

    if (!numericStars)  {
      return hotels;
    }

    return hotels.filter((hotel: IHotel) => {
      return hotel.stars === numericStars;
    })
  }

}

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {

  transform(hotels: IHotel[], searchValue: string): IHotel[] {

    if (!searchValue || searchValue.length === 0)  {
      return hotels;
    }

    return hotels.filter((hotel: IHotel) => {
      return hotel.title.indexOf(searchValue) !== -1;
    })
  }

}

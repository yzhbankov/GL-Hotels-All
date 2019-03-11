import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from './hotels/models';
import { getNumberValueFromString } from '../common/utils';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(hotels: IHotel[], stars: string): IHotel[] {
    const numericStars = getNumberValueFromString(stars);

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

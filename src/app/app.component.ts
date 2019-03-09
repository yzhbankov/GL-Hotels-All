import { Component } from '@angular/core';
import { IHotel } from './hotels/models';
import { Hotels } from './hotels/mock-hotels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'GL-Hotels-App';

  selectedHotel: IHotel = Hotels[0];

  displaySelectedHotel(hotel: IHotel) {
    this.selectedHotel = hotel;
  }

}

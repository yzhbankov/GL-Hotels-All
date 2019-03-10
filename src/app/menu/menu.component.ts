import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FILTERS } from '../../common/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  public filters: string[] = Object.values(FILTERS);

  @Output() activeFilter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public setActiveFilter(filter: string): void {
    this.activeFilter.emit(filter);
  }

}

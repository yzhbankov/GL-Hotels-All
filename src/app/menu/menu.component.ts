import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FILTERS } from '../../common/constants';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  public filters: string[] = Object.values(FILTERS);
  @Input() public selectedFilter: string;

  @Output() public activeFilter: EventEmitter<string> = new EventEmitter();
  @Output() public searchValue: EventEmitter<string> = new EventEmitter();

  public constructor() { }

  public ngOnInit(): void {
  }

  public setActiveFilter(filter: string): void {
    this.activeFilter.emit(filter);
  }

  public setSearchValue(event: any): void {
    this.searchValue.emit(event.target.value)
  }

}

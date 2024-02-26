import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
})
export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.filter.emit(filters[0]);
  }

  listFilter: string = '0';

  changeFilter(value: string): void {
    this.filter.emit(filters[value]);
  }
}

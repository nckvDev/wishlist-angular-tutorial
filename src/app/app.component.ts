import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('FInd grass that cuts itself'),
  ];

  listFilter: string = '0';
  newWishText = '';

  title = 'wishlist';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
    // todo: add wish to items array
    // clear the box
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log('toggle!', item);
  }
}

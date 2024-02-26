import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishitem';

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

  filter: any = () => true;

  title = 'wishlist';

  // get visibleItems(): WishItem[] {
  //   return this.items.filter(this.filter);
  // }
}

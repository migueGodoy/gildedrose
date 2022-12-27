import { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    for (const currentItem of this.items) {
      currentItem.updateQuality();
    }

    return this.items;
  }
}

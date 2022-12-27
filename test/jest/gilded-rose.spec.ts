import { GildedRose } from '@/gilded-rose';
import { Item } from "@/Item";

describe('Gilded Rose', () => {
  it('should decrement quality by one for normal items', () => {
    const gildedRose = new GildedRose([new Item('foo', 4, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it('should increment quality by 3 for conctert pass with sellIn < 6 and quality < 50', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(itemName, 4, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
  });
});

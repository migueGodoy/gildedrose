import { GildedRose } from '@/gilded-rose';
import { Item } from "@/Item";

describe('Gilded Rose', () => {
  it('should decrease quality by one for normal items', () => {
    const gildedRose = new GildedRose([new Item('foo', 4, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it('should increase quality by 2 for AGED BRIE if sellIn falls below 0', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it('should increment quality by 3 for conctert pass with sellIn < 6 and quality < 50', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(itemName, 4, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
  });

  it('should increment quality by 2 for conctert pass with sellIn between 6 and 11 and quality < 50', () => {
    const itemName = 'Backstage passes to a TAFKAL80ETC concert';
    const gildedRose = new GildedRose([new Item(itemName, 10, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });
});

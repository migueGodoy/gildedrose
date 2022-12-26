import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should decrement quality by one for normal items', () => {
    const gildedRose = new GildedRose([new Item('foo', 4, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });
});

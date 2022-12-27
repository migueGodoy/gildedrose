import { AgedBrieItem } from '@/AgedBrieItem';
import { ConcertItem } from '@/ConcertItem';
import { ConjuredItem } from '@/ConjuredItem';
import { GildedRose } from '@/gilded-rose';
import { Item } from "@/Item";
import { SulfurasItem } from '@/SulfurasItem';

describe('Gilded Rose', () => {
  it('should decrease quality by one for normal items', () => {
    const gildedRose = new GildedRose([new Item('foo', 4, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it('should increase quality by 2 for AGED BRIE if sellIn falls below 0', () => {
    const gildedRose = new GildedRose([new AgedBrieItem(0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it('should increment quality by 3 for conctert pass with sellIn < 6 and quality < 50', () => {
    const gildedRose = new GildedRose([new ConcertItem(4, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(7);
  });

  it('should increment quality by 2 for conctert pass with sellIn between 6 and 11 and quality < 50', () => {
    const gildedRose = new GildedRose([new ConcertItem(10, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it('should not modify Sulfuras quality nor sellIn', () => {
    const gildedRose = new GildedRose([new SulfurasItem(5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(5);
  });

  it('should do a snapshot for 2 days', function () {
    let items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new AgedBrieItem(2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new SulfurasItem(0),
      new SulfurasItem(-1),
      new ConcertItem(15, 20),
      new ConcertItem(10, 49),
      new ConcertItem(5, 49),
      new ConjuredItem("Conjured Mana Cake", 3, 6)];

    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    gildedRose.updateQuality();

    expect(items).toMatchSnapshot();
  });

  it('should do a snapshot for 10 days', function () {
    let items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new AgedBrieItem(2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new SulfurasItem(0),
      new SulfurasItem(-1),
      new ConcertItem(15, 20),
      new ConcertItem(10, 49),
      new ConcertItem(5, 49),
      new ConjuredItem("Conjured Mana Cake", 3, 6)];

    const gildedRose = new GildedRose(items);

    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();

    expect(items).toMatchSnapshot();
  });
});

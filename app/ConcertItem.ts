import { Item } from "./Item";

export class ConcertItem extends Item {

    constructor(sellIn: number, quality: number) {
        super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality);
    }

    updateQuality(): void {
        if (this.quality < 50) {
            this.quality = this.quality + 1
            if (this.sellIn < 11) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1
                }
            }
            if (this.sellIn < 6) {
                if (this.quality < 50) {
                    this.quality = this.quality + 1
                }
            }
        }
          
        this.sellIn = this.sellIn - 1;
      
        if (this.sellIn < 0) {
            this.quality = 0
        }
    }
}
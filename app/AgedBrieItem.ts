import { Item } from "./Item";

export class AgedBrieItem extends Item {

    constructor(sellIn: number, quality: number) {
        super('Aged Brie', sellIn, quality);
    }

    updateQuality(): void {
        if (this.quality < 50) {
            this.quality = this.quality + 1
        }
        this.sellIn = this.sellIn - 1;
        if (this.sellIn < 0) {
            if (this.quality < 50) {
                this.quality = this.quality + 1
            }
        }
    }
}
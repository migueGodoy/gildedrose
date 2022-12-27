import { Item } from "./Item";

export class ConjuredItem extends Item {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
    }

    updateQuality(): void {
        this.quality -= 2;
        this.sellIn--;
    };
}
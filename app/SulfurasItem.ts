import { Item } from "./Item";

export class SulfurasItem extends Item {

    constructor(sellIn: number) {
        super('Sulfuras, Hand of Ragnaros', sellIn, 80);
    }

    updateQuality(): void {
        
    }
}
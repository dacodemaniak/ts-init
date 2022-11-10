import { POE } from "../models/poe";
import { List } from "./list";

export class ListPoe extends List<POE> {
    public addItem(item: POE): void {
        if (!this.list.includes(item)) {
            super.addItem(item)
        }
    }
}
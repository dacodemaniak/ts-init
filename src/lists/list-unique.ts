import { List } from "./list";

export abstract class ListUnique<T> extends List<T> {
    public addItem(item: T): void {
        if (!Array.from(this.list.values()).includes(item)) {
            super.addItem(item)
            // this.list.push(item)
        } else {
            throw new Error('Item already exists, add is forbidden')
        }
    }
}
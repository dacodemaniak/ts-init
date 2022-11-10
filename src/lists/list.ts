export abstract class List<T> {
    protected list: Array<T> = [] // Type can be any[]

    public addItem(item: T): void {
        this.list.push(item)
    }

    public removeItem(item: T): void {}

    public updateItem(item: T): void {}

    public sort(): Array<T> {
        return []
    }

    public getSize(): number {
        return this.list.length
    }
}
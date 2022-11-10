export abstract class List<T> {
    protected list: Map<number, T> = new Map<number, T>()

    public addItem(item: T): void {
        this.list.set(this.getNextIndex(), item)
    }

    public removeItem(item: T): void {}

    public updateItem(item: T): void {}

    public sort(): Array<T> {
        return []
    }

    public getSize(): number {
        return this.list.size
    }

    private getNextIndex(): number {
        return this.getSize() + 1
    }
}
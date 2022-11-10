export abstract class List<T> {
    protected list: Map<number, T> = new Map<number, T>()

    public addItem(item: T): void {
        this.list.set(this.getNextIndex(), item)
    }

    public removeItem(item: T): void {
        /**
         * Parcourir le Map et chercher l'élément
         * Récupérer la clé de l'élément trouvé
         * fin de parcours
         * si (clé !== 0)
         *  Utiliser la méthode delete du Map pour supprimer l'élément
         */
        let keyToRemove: Array<number> = []
        this.list.forEach((value: T, key: number) => {
            if (value === item) {
                keyToRemove.push(key)
            }
        })
        if (keyToRemove.length > 0) {
            for (let key of keyToRemove) {
                this.list.delete(key)
            }
        }
    }

    public updateItem(item: T): void {
        /**
         * oldPoe = {title: 'Fullstack Angular Java, beginDate: '2 nov. 2022', endDate: '3 fév. 2023'}
         * item = {title: 'Java Angular Fullstack', beginDate: '2 nov. 2022', endDate: '3 fév. 2023'}
         */
        let found: boolean = false
        this.list.forEach((oldItem: T, key: number) => {
            if (item === oldItem) {
                this.list.set(key, item)
                found = true
            }
        })
        if (!found) {
            throw new Error('Item was not found, maybe deleted before?')
        }
        
    }

    public sort(): Array<T> {
        return []
    }

    public getSize(): number {
        return this.list.size
    }

    public getItem(key: number): T | undefined {
        if (this.list.has(key)) {
            return this.list.get(key)
        }
        return undefined
    }
    
    private getNextIndex(): number {
        return this.getSize() + 1
    }
}
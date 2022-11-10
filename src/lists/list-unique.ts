import { List } from "./list";

export abstract class ListUnique<T> extends List<T> {
    public addItem(item: T): void {
        if (!Array.from(this.list.values()).includes(item)) {
            super.addItem(item)
            // this.list.push(item)
        } else {
            throw new Error('Item already exists, add is forbidden')
        }

        // Version longue
        let found: boolean = false
        this.list.forEach((value: T, key: number) => {
            if (value === item) {
                found = true
            }
        })
        if (!found) {
            super.addItem(item)
        }
    }

    public removeItem(item: T): void {
        /**
         * Parcourir le Map et chercher l'élément
         * Récupérer la clé de l'élément trouvé
         * fin de parcours
         * si (clé !== 0)
         *  Utiliser la méthode delete du Map pour supprimer l'élément
         */
        let keyToRemove: number = 0
        this.list.forEach((value: T, key: number) => {
            console.log(`value is : ${JSON.stringify(value)}`)
            if (value === item) {
                keyToRemove = key
            }
        })
        this.list.delete(keyToRemove)
    }
}
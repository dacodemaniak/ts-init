import { POE } from "../models/poe";
import { List } from "./list";
import { ListUnique } from "./list-unique";

export class ListPoe extends ListUnique<POE> {
    public sort(): POE[] {
        const poes: Array<POE> = Array.from(this.list.values())

        return poes.sort((p1: POE, p2: POE) => {
            if (p1.getBeginDate() < p2.getBeginDate()) {
                return -1
            } else {
                if (p1.getBeginDate() > p2.getBeginDate()) {
                    return 1
                } else {
                    return 0
                }
            }
        })
    }
}
import { Stagiaire } from "../models/stagiaire";
import { ListUnique } from "./list-unique";

export class ListStagiaire extends ListUnique<Stagiaire> {

    public sort(): Stagiaire[] {
        const stagiaires: Array<Stagiaire> = Array.from(this.list.values())
        return stagiaires.sort((s1: Stagiaire, s2: Stagiaire) => {
            return s1.lastName.localeCompare(s2.lastName)
        })
    }
}

/**
 * Définir une variable booléenne (vrai ou faux) found avec la valeur faux (réputé pas trouvé)
 * Parcourir la liste existante
 *  comparer l'item (celui que je veux ajouter) à l'item courant dans la liste
 *  SI le résultat de la comparaison est vrai (item === existingItem) ALORS
 *      found devient VRAI
 *      on peut sortir de la boucle (break)
 *  FIN SI
 * FIN DU FOR
 * Tester la valeur de "found"
 * SI (found N'EST PAS VRAI) ALORS
 *  ajouter item à la liste
 * FIN SI
 * 
 * class Vivant
 * class Mort
 * class EtreHumain extends Vivant, Mort (Walking Dead)
 * 
 * class Mammifere
 * class Felin extends Mammifere
 * class Chat extends Felin
 * class Chartreux extends Chat (super[Chat].super[Felin].super[Felin])
 * class Noisette extends Chat (Paradoxe de Liskov)
 */
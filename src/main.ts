import { Stagiaire } from "./models/stagiaire"

/**
 * main : Entry point of application
 * @version 1.0.0
 * @date 2022-11-09
 * @author Aélion <jla.webprojet@gmail.com>
 */
class Main {
    public constructor() {
        console.log('Hello TypeScript')
    }

    public buildStagiaire(lastName: string, firstName: string): Stagiaire {
        const stagiaire: Stagiaire = new Stagiaire(lastName, firstName)
        return stagiaire
    }
}

// Instanciate the Main class (constructor will be invoked)
const app: Main = new Main()
const stagiaire: Stagiaire = app.buildStagiaire('Aubert', 'Jean-Luc')
stagiaire.setBirthDate(new Date(1968, 3, 30))
console.log(`Stagiaire named : ${stagiaire.lastName} ${stagiaire.getBirthDate()}`)
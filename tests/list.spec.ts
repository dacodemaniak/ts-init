import { ListPoe } from "../src/lists/list-poe"
import { ListStagiaire } from "../src/lists/list-stagiaire"
import { POE } from "../src/models/poe"
import { Stagiaire } from "../src/models/stagiaire"

describe(`Abstract lists behaviour`, () => {
    test(`After removal, list size should be 1`, () => {
        const stagiaire1: Stagiaire = new Stagiaire('Aubert', 'Jean-Luc')
        const stagiaire2: Stagiaire = new Stagiaire('Bond', 'James')

        const listStagiaire: ListStagiaire = new ListStagiaire()
        listStagiaire.addItem(stagiaire1)
        listStagiaire.addItem(stagiaire2)

        listStagiaire.removeItem(stagiaire1)

        expect(listStagiaire.getSize()).toBe(1)
    })

    test(`Stagiaire list should have 'Aubert' as first element`, () => {
        const stagiaire1: Stagiaire = new Stagiaire('Aubert', 'Jean-Luc')
        const stagiaire2: Stagiaire = new Stagiaire('Bond', 'James')

        const listStagiaire: ListStagiaire = new ListStagiaire()
        listStagiaire.addItem(stagiaire2)
        listStagiaire.addItem(stagiaire1)
        
        const stagiaires: Array<Stagiaire> = listStagiaire.sort()
        const stagiaire: Stagiaire = stagiaires[0]

        expect(stagiaire.lastName).toBe('Aubert')
    })

    test(`POE list should have 'Fullstack Java' as first element`, () => {
        const poe1: POE = new POE()
        poe1.title = 'DevOps'
        poe1.setBeginDate(new Date(2023, 0, 2))
        poe1.setEndDate(new Date(2023, 2, 3))

        const poe2: POE = new POE()
        poe2.title = 'Fullstack Java'
        poe2.setBeginDate(new Date(2022, 10, 4))
        poe2.setEndDate(new Date(2023, 1, 3))

        const listPoe: ListPoe = new ListPoe()
        listPoe.addItem(poe1)
        listPoe.addItem(poe2)

        const poes: Array<POE> = listPoe.sort()
        const poe: POE = poes[0]

        expect(poe.title).toBe('Fullstack Java')
    })

    test(`List updateItem method should throw an Error if item was not found`, () => {
        const poe1: POE = new POE()
        poe1.title = 'DevOps'
        poe1.setBeginDate(new Date(2023, 0, 2))
        poe1.setEndDate(new Date(2023, 2, 3))

        const listPoe: ListPoe = new ListPoe()
        listPoe.addItem(poe1)

        const poe2: POE = new POE()
        poe2.title = 'Fullstack Java'
        poe2.setBeginDate(new Date(2022, 10, 4))
        poe2.setEndDate(new Date(2023, 1, 3))

        expect(() => listPoe.updateItem(poe2)).toThrowError()
    })

    test(`List updateItem should give 'Consultant Devops' as title`, () => {
        const poe1: POE = new POE()
        poe1.title = 'DevOps'
        poe1.setBeginDate(new Date(2023, 0, 2))
        poe1.setEndDate(new Date(2023, 2, 3))

        const listPoe: ListPoe = new ListPoe()
        listPoe.addItem(poe1)

        poe1.title = 'Consultant DevOps'

        expect(listPoe.getItem(1)?.title).toBe('Consultant DevOps')
    })

    test(`Unique List should not have twice same Object`, () => {
        const stagiaire1: Stagiaire = new Stagiaire('Aubert', 'Jean-Luc')

        const listStagiaire: ListStagiaire = new ListStagiaire()
        try {
            listStagiaire.addItem(stagiaire1) 
        } catch(error: any) {
            console.log(error.message)
        }
        // Try one more time
        try {
            listStagiaire.addItem(stagiaire1) 
        } catch(error: any) {
            console.log(error.message)
        }
        expect(listStagiaire.getSize()).toBe(1)
               
    })

    test(`Only for see console`, () => {
        const poe1: POE = new POE()
        poe1.title = 'DevOps'
        poe1.setBeginDate(new Date(2023, 0, 2))
        poe1.setEndDate(new Date(2023, 2, 3))

        const listPoe: ListPoe = new ListPoe()
        listPoe.addItem(poe1)

        const poe2: POE = new POE()
        poe2.title = 'Fullstack Java'
        poe2.setBeginDate(new Date(2022, 10, 4))
        poe2.setEndDate(new Date(2023, 1, 3))

        listPoe.removeItem(poe1)

        expect(true).toBeTruthy()
    })
})
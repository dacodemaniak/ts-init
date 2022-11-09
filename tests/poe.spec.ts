import { POE } from "../src/models/poe"

describe(`POE Model`, () => {
    test(`POE Model should be instanciated`, () => {
        const poe = new POE()
        expect(poe).toBeInstanceOf(POE)
    })

    test(`title should be Fullstack Java Angular`, () => {
        const expectedTitle = 'Fullstack Java Angular'
        const poe = new POE()
        poe.title = expectedTitle
        expect(poe.title).toBe(expectedTitle)
    })

    test(`beginDate should be an instance of Date`, () => {
        const poe: POE = new POE()
        poe.setBeginDate(new Date(2022,10,24))
        expect(poe.getBeginDate()).toBeInstanceOf(Date)
    })

    test(`endDate should be an instance of Date`, () => {
        const poe: POE = new POE()
        poe.setEndDate(new Date(2023,1,2))
        expect(poe.getEndDate()).toBeInstanceOf(Date)
    })

    test(`beginDate should be undefined if after endDate`, () => {
        const poe: POE = new POE()
        poe.setEndDate(new Date(2022,1,2))
        poe.setBeginDate(new Date(2022,10,24))
        expect(poe.getBeginDate()).toBe(undefined)
    })

    test(`endDate should be undefined if before beginDate`, () => {
        const poe: POE = new POE()
        poe.setBeginDate(new Date(2022,10,24))
        poe.setEndDate(new Date(2022,1,2))
        expect(poe.getEndDate()).toBe(undefined)
    })
})
import { POE } from "../src/models/poe"

describe(`POE Model`, () => {
    test(`POE Model should be instanciated`, () => {
        const poe = new POE()
        expect(poe).toBeInstanceOf(POE)
    })
})
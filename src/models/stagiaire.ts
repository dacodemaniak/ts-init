export class Stagiaire {
    public lastName: string
    public firstName: string
    private birthDate!: Date
    public phoneNumber: string = ''
    public email!: string

    public constructor(lastName: string, firstName: string) {
        this.lastName = lastName
        this.firstName = firstName
    }

    public setBirthDate(birthDate: Date): void {
        if (birthDate < new Date()) {
            this.birthDate = birthDate
        }
    }

    public getBirthDate(): Date {
        return this.birthDate
    }
}
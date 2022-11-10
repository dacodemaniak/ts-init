export class DateConvertHelper {
    public static toFrDate(date: Date): string {
        if (date instanceof Date) {
            const options: any = { year: 'numeric', month: 'numeric', day: 'numeric' }
            const slashesDate: string = date.toLocaleDateString('fr-FR', options)
            return slashesDate.replace('/', '-').replace('/', '-')
        }
        throw new Error('A date was not provided')
    }

    private static zeroFill(value: number): string {
        return ('0' + value).slice(-2)
    }
}
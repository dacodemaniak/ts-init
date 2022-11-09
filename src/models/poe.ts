export class POE {
    public title: string = ''
    private beginDate!: Date
    private endDate!: Date

    public setBeginDate(date: Date): void {
        if (this.endDate !== undefined) {
            if (date < this.endDate) {
                this.beginDate = date
            }
        } else {
            this.beginDate = date;
        }
    }

    public getBeginDate(): Date {
        return this.beginDate
    }

    public setEndDate(date: Date): void {
        if (this.beginDate !== undefined) {
            if (date > this.beginDate) {
                this.endDate = date
            }
        } else {
            this.endDate = date
        }
    }

    public getEndDate(): Date {
        return this.endDate
    }
}
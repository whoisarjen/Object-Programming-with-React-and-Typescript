export interface DeskProps {
    amount: number
}

export class Desk implements DeskProps {
    amount: number = 0

    constructor(value: DeskProps) {
        const self = this;
        const valueObject: any = value;
        Object.keys(value).forEach((key: string) => {
            self[key as keyof typeof self] = valueObject[key]
        })
    }

    changeAmount(value: number | string) {
        this.amount += parseFloat(value as string);
        return this;
    }
}

export const defaultDesk = new Desk({ amount: 99999999999999 })
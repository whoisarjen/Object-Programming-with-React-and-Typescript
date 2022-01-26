export interface HistoryProps {
    id: number,
    WhenAdded: Date,
    amount: number,
    sender_ID: number,
    receiver_ID: number,
    worker_ID: number,
    note: string,
    type: string
}

export class History implements HistoryProps {
    id: number = 0
    WhenAdded: Date = new Date()
    amount: number = 0
    sender_ID: number = 0
    receiver_ID: number = 0
    worker_ID: number = 0
    note: string = ''
    type: string = '' // turtle

    constructor(value: HistoryProps) {
        const self = this;
        const valueObject: any = value;
        Object.keys(value).forEach((key: string) => {
            self[key as keyof typeof self] = valueObject[key]
        })
    }
}
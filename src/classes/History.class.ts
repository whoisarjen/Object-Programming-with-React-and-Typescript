export enum HistoryType {
    'deposit',
    'withdraw',
    'transfer',
    'loan'
}

export interface HistoryProps {
    id: number,
    whenAdded: Date,
    amount: number,
    sender_ID: number,
    receiver_ID: number,
    worker_ID: number,
    note: string | null,
    type: HistoryType
}

export class History implements HistoryProps {
    id: number = 0
    whenAdded: Date = new Date()
    amount: number = 0
    sender_ID: number = 0
    receiver_ID: number = 0
    worker_ID: number = 0
    note: string | null = null
    type: HistoryType = 0

    constructor(value: HistoryProps) {
        const self = this;
        const valueObject: any = value;
        Object.keys(value).forEach((key: string) => {
            self[key as keyof typeof self] = valueObject[key]
        })
    }
}
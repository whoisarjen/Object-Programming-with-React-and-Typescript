import { History, HistoryProps, HistoryType } from "./History.class";
import { ClientProps } from "./Client.class";
import { WorkerProps } from "./Worker.class";

export interface BankSystemProps {
    database: string,
    history: HistoryProps[]
    clients: ClientProps[]
    workers: WorkerProps[]
}

export class BankSystem implements BankSystemProps {
    database: string = 'MySQL'
    history: HistoryProps[] = []
    clients: ClientProps[] = []
    workers: WorkerProps[] = []

    deposit(
        {
            whenAdded,
            amount,
            sender_ID,
            receiver_ID,
            worker_ID,
            note,
            type
        }
            :
            {
                whenAdded: Date,
                amount: number,
                sender_ID: number,
                receiver_ID: number,
                worker_ID: number,
                note: string | null,
                type: HistoryType
            },
    ) {
        this.history.push(
            new History({
                id: new Date().getTime(),
                whenAdded,
                amount,
                sender_ID,
                receiver_ID,
                worker_ID,
                note,
                type
            })
        )
    }

    async checkHistory({ client }: { client: ClientProps }) {
        const response: Array<HistoryProps> = []
        this.history.forEach((x: HistoryProps) => {
            if (x.sender_ID == client.id || x.receiver_ID == client.id) {
                response.push(x)
            }
        })
        return response.reverse();
    }

    loan(
        {
            whenAdded,
            amount,
            sender_ID,
            receiver_ID,
            worker_ID,
            note,
            type
        }
            :
            {
                whenAdded: Date,
                amount: number,
                sender_ID: number,
                receiver_ID: number,
                worker_ID: number,
                note: string | null,
                type: HistoryType
            },
    ) {
        this.history.push(
            new History({
                id: new Date().getTime(),
                whenAdded,
                amount,
                sender_ID,
                receiver_ID,
                worker_ID,
                note,
                type
            })
        )
    }

    withdraw(
        {
            whenAdded,
            amount,
            sender_ID,
            receiver_ID,
            worker_ID,
            note,
            type
        }
            :
            {
                whenAdded: Date,
                amount: number,
                sender_ID: number,
                receiver_ID: number,
                worker_ID: number,
                note: string | null,
                type: HistoryType
            },
    ) {
        this.history.push(
            new History({
                id: new Date().getTime(),
                whenAdded,
                amount,
                sender_ID,
                receiver_ID,
                worker_ID,
                note,
                type
            })
        )
    }

    transfer(
        {
            whenAdded,
            amount,
            sender_ID,
            receiver_ID,
            worker_ID,
            note,
            type
        }
            :
            {
                whenAdded: Date,
                amount: number,
                sender_ID: number,
                receiver_ID: number,
                worker_ID: number,
                note: string | null,
                type: HistoryType
            },
    ) {
        this.history.push(
            new History({
                id: new Date().getTime(),
                whenAdded,
                amount,
                sender_ID,
                receiver_ID,
                worker_ID,
                note,
                type
            })
        )
    }
}

export const defaultBankSystem = new BankSystem()
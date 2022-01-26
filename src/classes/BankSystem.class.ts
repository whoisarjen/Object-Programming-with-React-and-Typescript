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
        console.log(`Sending data to ${this.database}`)
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

    checkHistory({ client }: { client: ClientProps }) {
        console.log(`Loading data from ${this.database}`)
        console.log(`----- History for ${client.name} -----`)
        this.history.forEach((x: HistoryProps) => {
            if (x.sender_ID == client.id || x.receiver_ID == client.id) {
                console.log(`User: ${x.sender_ID} to ${x.receiver_ID} ${x.whenAdded} ${HistoryType[x.type]} ${x.amount}`)
                console.log('-')
            }
        })
    }

    loan() {

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
        console.log(`Sending data to ${this.database}`)
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

    transfer() {

    }
}

export const defaultBankSystem = new BankSystem()
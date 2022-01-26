import { HistoryProps } from "./History.class";
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

    deposit() {

    }

    checkHistory() {

    }

    loan() {

    }

    withdraw() {

    }

    transfer() {

    }
}
import { User, UserProps } from "./User.class";

export interface WorkerProps extends UserProps { }

export class Worker extends User { }

export const defaultWorker = new Worker({ id: 123, name: 'Marek', surname: 'Markowski', pesel: 123 }) 
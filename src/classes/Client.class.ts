import { User, UserProps } from "./User.class";

export interface ClientProps extends UserProps { }

export class Client extends User { }

export const defaultClient = new Client({ id: 1, name: 'Kamil', surname: 'Kamilowski', pesel: 1 }) 
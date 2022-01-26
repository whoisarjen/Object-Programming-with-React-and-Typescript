export interface UserProps {
    id: number,
    name: string,
    surname: string,
    pesel: number
}

export class User implements UserProps {
    id: number = 0
    name: string = ''
    surname: string = ''
    pesel: number = 0

    constructor(value: UserProps) {
        const self = this;
        const valueObject: any = value;
        Object.keys(value).forEach((key: string) => {
            self[key as keyof typeof self] = valueObject[key]
        })
    }
}
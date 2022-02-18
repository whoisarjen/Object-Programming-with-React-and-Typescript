export interface PrinterProps { }

export class Printer implements PrinterProps {
    print() {
        console.log('Printing...')
    }
}
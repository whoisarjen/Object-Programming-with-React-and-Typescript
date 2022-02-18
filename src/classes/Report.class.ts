export interface ReportProps { }

export class Report implements ReportProps {
    report() {
        console.log('Sending report...')
    }
}
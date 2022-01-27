import { FunctionComponent, useEffect, useState } from "react";
import { defaultDesk } from './classes/Desk.class'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import { defaultWorker } from './classes/Worker.class'
import { defaultClient } from './classes/Client.class'
import { defaultBankSystem } from './classes/BankSystem.class'
import ListComponent from "./components/ListComponent";
import { HistoryProps } from "./classes/History.class";

const Deposit: FunctionComponent = () => {
    const [date, setDate] = useState(new Date())
    const [amount, setAmount] = useState(0)
    const [array, setArray] = useState<Array<HistoryProps>>([])

    const makeDeposit = async () => {
        defaultDesk.changeAmount(amount)
        defaultBankSystem.deposit({
            whenAdded: date,
            amount,
            sender_ID: 0, // 0 = Bank
            receiver_ID: defaultClient.id,
            worker_ID: defaultWorker.id,
            note: null,
            type: 0
        })
        setArray(await defaultBankSystem.checkHistory({ client: defaultClient }))
    }

    useEffect(() => {
        (async () => {
            setArray(await defaultBankSystem.checkHistory({ client: defaultClient }))
        })()
    }, [])

    return (
        <div className="deposit">
            <TextField id="outlined-basic" label="Worker ID" variant="outlined" disabled value={defaultWorker.id} />
            <TextField id="outlined-basic" label="Receiver ID" variant="outlined" disabled value={defaultClient.id} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Date"
                    value={date}
                    minDate={new Date()}
                    onChange={(newValue: any) => {
                        setDate(newValue);
                    }}
                    renderInput={(params: any) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <TextField id="outlined-basic" label="amount" variant="outlined" onChange={(e: any) => setAmount(e.target.value)} />
            <Button variant="contained" onClick={makeDeposit}>Send</Button>
            <ListComponent array={array} />
        </div>
    )
}

export default Deposit;
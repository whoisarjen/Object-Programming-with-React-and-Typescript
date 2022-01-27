import { FunctionComponent, useEffect, useState } from "react";
import { defaultBankSystem } from "./classes/BankSystem.class";
import { defaultClient } from "./classes/Client.class";
import { HistoryProps } from "./classes/History.class";
import { defaultWorker } from "./classes/Worker.class";
import ListComponent from "./components/ListComponent";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';

const Transfer: FunctionComponent = () => {
    const [date, setDate] = useState(new Date())
    const [amount, setAmount] = useState(0)
    const [array, setArray] = useState<Array<HistoryProps>>([])
    const [note, setNote] = useState('')
    const receiver_ID = 1111111111;

    const makeTransfer = async () => {
        defaultBankSystem.transfer({
            whenAdded: date,
            amount,
            sender_ID: defaultClient.id,
            receiver_ID: receiver_ID,
            worker_ID: defaultWorker.id,
            note,
            type: 2
        })
        setArray(await defaultBankSystem.checkHistory({ client: defaultClient }))
    }

    useEffect(() => {
        (async () => {
            setArray(await defaultBankSystem.checkHistory({ client: defaultClient }))
        })()
    }, [])

    return (
        <>
            <TextField id="outlined-basic" label="Worker ID" variant="outlined" disabled value={defaultWorker.id} />
            <TextField id="outlined-basic" label="Sender ID" variant="outlined" disabled value={defaultClient.id} />
            <TextField id="outlined-basic" label="Receiver ID" variant="outlined" disabled value={receiver_ID} />
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
            <TextField id="outlined-basic" label="Note" variant="outlined" value={note} onChange={(e) => setNote(e.target.value)}/>
            <Button variant="contained" onClick={makeTransfer}>Send</Button>
            <ListComponent array={array} />
        </>
    )
}

export default Transfer;
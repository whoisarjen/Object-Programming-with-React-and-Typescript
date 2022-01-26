import { FunctionComponent, useState } from "react";
import { defaultDesk } from './classes/Desk.class'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Button from '@mui/material/Button';
import { defaultWorker } from './classes/Worker.class'
import { defaultClient } from './classes/Client.class'
import { defaultBankSystem } from './classes/BankSystem.class'

const Withdraw: FunctionComponent = () => {
    const [date, setDate] = useState(new Date())
    const [amount, setAmount] = useState(0)

    const makeWithdraw = () => {
        defaultDesk.changeAmount(amount)
        defaultBankSystem.withdraw({
            whenAdded: date,
            amount,
            receiver_ID: 0, // 0 = Bank
            sender_ID: defaultClient.id,
            worker_ID: defaultWorker.id,
            note: null,
            type: 0
        })
    }

    return (
        <div className="withdraw">
            <TextField id="outlined-basic" label="Worker ID" variant="outlined" disabled value={defaultWorker.id} />
            <TextField id="outlined-basic" label="Sender ID" variant="outlined" disabled value={defaultClient.id} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Basic example"
                    value={date}
                    onChange={(newValue: any) => {
                        setDate(newValue);
                    }}
                    renderInput={(params: any) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <TextField id="outlined-basic" label="amount" variant="outlined" onChange={(e: any) => setAmount(e.target.value)} />
            <Button variant="contained" onClick={makeWithdraw}>Send</Button>
        </div>
    )
}

export default Withdraw;
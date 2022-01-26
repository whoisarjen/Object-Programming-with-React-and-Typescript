import { FunctionComponent, useState } from "react";
import { defaultDesk } from './classes/Desk.class'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { defaultWorker } from './classes/Worker.class'
import { defaultClient } from './classes/Client.class'

const makeDeposit = () => {
    console.log(defaultDesk)


    // DESK NEED TO HAVE FUNCTION CHANGE AMOUNT ON DIAGRAMS
}

const Deposit: FunctionComponent = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div className="deposit">
            <TextField id="outlined-basic" label="Worker ID" variant="outlined" disabled value={defaultWorker.id} />
            <TextField id="outlined-basic" label="Receiver ID" variant="outlined" disabled value={defaultClient.id} />
            <TextField id="outlined-basic" label="amount" variant="outlined" />
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
            <button onClick={makeDeposit}>asdasa</button>
        </div>
    )
}

export default Deposit;
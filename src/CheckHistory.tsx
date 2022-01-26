import { FunctionComponent } from "react";
import Button from '@mui/material/Button';
import { defaultClient } from './classes/Client.class'
import { defaultBankSystem } from './classes/BankSystem.class'

const CheckHistory: FunctionComponent = () => {

    const makeCheckHistory = () => {
        defaultBankSystem.checkHistory({ client: defaultClient })
    }

    return (
        <div className="deposit">
            <Button variant="contained" onClick={makeCheckHistory}>check</Button>
        </div>
    )
}

export default CheckHistory;
import { FunctionComponent, useEffect, useState } from "react";
import { defaultClient } from './classes/Client.class'
import { defaultBankSystem } from './classes/BankSystem.class'
import ListComponent from "./components/ListComponent";
import { HistoryProps } from "./classes/History.class";

const CheckHistory: FunctionComponent = () => {
    const [array, setArray] = useState<Array<HistoryProps>>([])

    useEffect(() => {
        (async () => {
            setArray(await defaultBankSystem.checkHistory({ client: defaultClient }))
        })()
    }, [])

    return (
        <div className="deposit">
            <ListComponent array={array} />
        </div>
    )
}

export default CheckHistory;
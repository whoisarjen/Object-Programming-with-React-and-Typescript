import { FunctionComponent } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { HistoryProps, HistoryType } from "../classes/History.class";

interface ListComponentProps {
    array: Array<HistoryProps>
}

const ListComponent: FunctionComponent<ListComponentProps> = ({ array }) => {
    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {
                array &&
                array.length > 0 &&
                array.map(x =>
                    <ListItem>
                        <ListItemText primary={`From ${x.sender_ID} to ${x.receiver_ID}: ${x.amount}zł ${x.note ? x.note : ''} (${HistoryType[x.type]})`} secondary={x.whenAdded.toString()} />
                    </ListItem>
                )
            }
        </List>
    )
}

export default ListComponent;
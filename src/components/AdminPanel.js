import React, { useState } from 'react';
import AdminRooms from './AdminPanel/Rooms'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function NestedList() {
    const classes = useStyles();
    const [content,setContent] = useState(0)

    let Contents = function(a){
        let res = ''
        if(a == 1){
            res = <AdminRooms/>
        }else if(a == 2){
            res = 'Drafts'
        }else if(a == 3){
            res = 'Messages'
        }else{
            res = 'Выберите категорию' 
        }
        return res
    }

    return (
        <div className="row">
            <div className="list__Left">
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    <ListItem button onClick={()=>setContent(1)}>
                        <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon>
                        <ListItemText primary="Rooms" />
                    </ListItem>
                    <ListItem button onClick={()=>setContent(2)}>
                        <ListItemIcon>
                        <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <ListItem button onClick={()=>setContent(3)}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Messages" />
                    </ListItem>
                </List>
            </div>
            <div className="list__Right">
                { Contents(content) }
            </div>
        </div>
    );
}
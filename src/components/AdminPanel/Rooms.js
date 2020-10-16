import React, { useEffect, useState } from 'react'
// import Axios from 'axios'
import items from '../../data'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RoomCard from './RoomCard'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Rooms(props) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    console.log('CHF<FNSDFTN');
    const [iList,setList] = useState(items)
    const [update,setUpdate] = useState(true)


    // const [items, setItems] = useState([])

    // useEffect(() => {
    //     const URL = 'http://localhost:15103'
    //     Axios.get(URL + '/rooms')
    //         .then(res => {
    //             console.log(res.data);
    //             setItems(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err.responce);
    //         })
    // }, [])

    return (
        <div className="row">
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {iList.map((value,index) => (
                            <Grid key={value} item>
                                <RoomCard data={value} delete={setList} iLists={iList} id={index} setUpdate={setUpdate} update={update}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

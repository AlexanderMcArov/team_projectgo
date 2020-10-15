import React, { useState } from 'react';
import Axios from 'axios'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CreateOrder(props) {

  const [name, setName] = useState('')
  const [sname, setSName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    btn_ok: {
      background: '#50B000',
      color: '#ffffff',
      borderColor: '#50B000',
      '&:hover': {
        background: '#5FD000'
      },
    },
    btn_list: {
      display: 'flex',
      justifyContent: 'flex-end',
    }

  }));
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  function sendMessage() {
    let text = `Пользователь: ${name} ${sname}
    Забронировал номер.
    Его контактные данные:
     E-mail: ${email}
     Номер: ${number}`
    Axios.get(`https://api.telegram.org/bot1374639209:AAHf_y44kiesOR8jJIDyzOfq-Q1PBtj7wtE/sendMessage?text=${text}&chat_id=582300291`)
      .then(res => {
        setName('')
        setSName('')
        setNumber('')
        setEmail('')
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.responce);
      })
  }

  let data = props.data
  let [isOpen, setOpen] = useState(false)

  return (
    <div onClick={(e) => {
      if (isOpen && e.target.className == 'order__body') setOpen(false)
    }}>
      <button className="btn-primary" onClick={() => setOpen(true)}>Order</button>
      {isOpen ? <div className="order__body">
        <div className="order__form">
          <div className="order__title">
            {data.name}
          </div>
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                Room type: {data.name}<br></br>
                Pets: {data.pets ? 'can' : 'cant'}
                <div className="row">
                  <TextField
                    // required
                    id="outlined-required"
                    label="Введите имя"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    // required
                    id="outlined-disabled"
                    label="Введите фамилию"
                    variant="outlined"
                    value={sname}
                    onChange={(e) => setSName(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-required"
                    label="Введите e-mail"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    id="outlined-required"
                    label="Введите телефон:"
                    variant="outlined"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                You main guest?<br></br>
                <FormControlLabel
                  control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                  label="I'm"
                /><br></br>
                <div className={classes.btn_list}>
                  <Button variant="contained" className={classes.btn_ok} onClick={sendMessage}>
                    SEND
                  </Button>
                  <Button variant="outlined" onClick={() => setOpen(false)} color="secondary">
                    CANCEL
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> : ''}
    </div>
  )
}

export default CreateOrder



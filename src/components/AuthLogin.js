import React, { useState } from 'react';
import { Redirect} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import {useDispatch} from 'react-redux'
import {contactAddItem} from '../redux/actions/contactbook'

function AuthLogin() {

  const [redirect,setRedirect] = useState(false)
  const [isOpen,setOpen] = useState(false)
  const [login,setLogin] = useState('')
  const [password,setPassword] = useState('')
  const [repPassword,setRepPassword] = useState('')
  const dispatch = useDispatch()

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
      justifyContent: 'center',
    }

  }));
  const classes = useStyles();

  return (
    <div onClick={(e)=>{
      if(isOpen && e.target.className == 'order__body') setOpen(false)
    }}>
      {redirect ? <Redirect to='/admin'/> : ''}
      <button className="btn_login" onClick={()=>setOpen(true)}>
        <VpnKeyIcon className="fa fa-plus-circle" style={{ color: blue[500] }} />
      </button>
      {isOpen ? <div className="order__body">
        <div className="order__form">
          <div className="order__title">
          </div>
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <div className="col">
                  <TextField
                    // required
                    id="outlined-required"
                    label="Login"
                    variant="outlined"
                    value={login}
                    onChange={(e)=>setLogin(e.target.value)}
                  />
                  <TextField
                    // required
                    id="outlined-disabled"
                    label="Password"
                    defaultValue=""
                    variant="outlined"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                  />
                  <TextField
                    // required
                    id="outlined-disabled"
                    label="Repeat Password"
                    defaultValue=""
                    variant="outlined"
                    value={repPassword}
                    onChange={(e)=>setRepPassword(e.target.value)}
                  />
                </div>
                <div className={classes.btn_list}>
                  <Button variant="contained" className={classes.btn_ok} onClick={()=>{
                    dispatch(contactAddItem({login,password}))
                  }}>
                    LOGIN
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>
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

export default AuthLogin


// breakfast: true
// capacity: 6
// description: "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray."
// extras: (7) ["Plush pillows and breathable bed linens", "Soft, oversized bath towels", "Full-sized, pH-balanced toiletries", "Complimentary refreshments", "Adequate safety/security", "Internet", "Comfortable beds"]
// featured: true
// id: "12"
// images: (4) ["/static/media/room-12.0e293352.jpeg", "/static/media/details-2.50c23e62.jpeg", "/static/media/details-3.7345b9f6.jpeg", "/static/media/details-4.7569a316.jpeg"]
// name: "family deluxe"
// pets: true
// price: 500
// size: 700
// slug: "family-deluxe"
// type: "family"

// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid #000',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function SimpleModal(props) {

//   const [data,setData] = useState(props.data)
//   console.log(data.namew);
//   const classes = useStyles();
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   let body = (
//     <div style={modalStyle} className={classes.paper}>
//       <h2 id="simple-modal-title">{data.name}</h2>
//       <p id="simple-modal-description">
//         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//       </p>
//       <SimpleModal />
//     </div>
//   );

//   return (
//     <div>
//       <button type="button" className="btn-primary" onClick={handleOpen}>
//         To Book
//       </button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         {body}
//       </Modal>
//     </div>
//   );
// }
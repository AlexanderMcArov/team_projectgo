import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CreateOrder(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  console.log(props.data);
  let data = props.data
  let [isOpen, setOpen] = useState(false)
  return (
    <div>
      <button className="btn-primary" onClick={() => setOpen(true)}>Order</button>
      {isOpen ? <div className="order__body">
        <div className="order__form">
          <div className="order__title">
            Введите свои данные
          </div>
          <div>
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <div className="row">
                <TextField
                  // required
                  id="outlined-required"
                  label="Введите имя"
                  variant="outlined"
                />
                <TextField
                  // required
                  id="outlined-disabled"
                  label="Введите фамилию"
                  defaultValue=""
                  variant="outlined"
                />
                </div>
                <div className="row">
                <TextField
                  required
                  id="outlined-required"
                  label="Введите e-mail"
                  defaultValue="Hello World"
                  variant="outlined"
                />                
                </div>
                Кто основной гость?<br></br>
                <FormControlLabel
                  control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                  label="Я"
                />
              </div>
            </form>
          </div>
        </div>
      </div> : ''}
    </div>
  )
}

export default CreateOrder


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
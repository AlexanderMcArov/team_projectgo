// import React from 'react'

// function CreateOrder(props) {
//     console.log(props.data);
//     let data = props.data
//     return (
//         <div className="order__body">
//             <div className="order__form">
//             Name: {data.name}<br></br>
//             Price : {data.price}<br></br>
//             Pets : { data.pets ? <> МОжно </> : <> Нельзя </>}<br></br>
//             Breakfast : { data.breakfast ? <> С питанием </> : <> Без питания </>}<br></br>
//             capacity : { data.capacity }<br></br>
//             </div>            
//         </div>
//     )
// }

// export default CreateOrder


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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <button type="button" className="btn-primary" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
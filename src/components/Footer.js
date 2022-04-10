import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
// import SortIcon from '@material-ui/icons/Sort';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    fontFamily: 'Nunito',
    color: 'white',
   },
//   appbar: {
//     background: 'none',
//   },

//   btn : {
//     backgroundColor:'green',
//     color: 'white',
//     outline:'none',
//   },

//   appbarWrapper: {
//     width: '80%',
//     margin: '0 auto',
//   },
//   appbarTitle: {
//     flexGrow: '1',
//   },
//   icon: {
//     color: '#fff',
//     fontSize: '2rem',
//   },
//   colorText: {
//     color: '#5AFF3D',
//   },
//   container: {
//     textAlign: 'center',
//   },
//   title: {
//     color: '#fff',
//     fontSize: '4.5rem',
//   },
//   goDown: {
//     color: '#5AFF3D',
//     fontSize: '4rem',
//   },
}));
export default function Header() {
  const classes = useStyles();
//   const [checked, setChecked] = useState(false);
//   useEffect(() => {
//     setChecked(true);
//   }, []);
  return (
    <div className={classes.footer} id="footer">
     Made with 💙 by Team Titans
    </div>
  );
}

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from "react-router-dom";
import AuthenticationService from '../../services/AuthenticationService';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  
   const handleLogout = (e) => {
       AuthenticationService.logout();
   };

  const isLoggedIn = AuthenticationService.isUserLoggedIn();
  
  
  const list_notLogin = (anchor) => (
      
      <div
      className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
      <List>
        {[
            <Link to="/home" className="text-black font-weight-bold">Home</Link>, 
            <Link to="/about" className="text-black font-weight-bold">About</Link>, 
            <Link to="/gye-list" className="text-black font-weight-bold">Gye</Link>, 
            <Link to="/board" className="text-black font-weight-bold">Board</Link>,
            <Link to="/contactus" className="text-black font-weight-bold">ContactUs</Link>   
        ].map((text, index) => (
            <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />


      <List>
        {[
            <Link to="/login" className="text-black font-weight-bold">
            Sign In</Link>, 
            <Link to="/sign-up" className="text-black font-weight-bold">
            Sign Up</Link>
            
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const list_login = (anchor) => (
      
    
    
    <div
    className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      >
    <List>
      {[
          <Link to="/home" className="text-black font-weight-bold">Home</Link>, 
          <Link to="/about" className="text-black font-weight-bold">About</Link>, 
          <Link to="/gye-list" className="text-black font-weight-bold">Gye</Link>, 
          <Link to="/board" className="text-black font-weight-bold">Board</Link>,
          <Link to="/contactus" className="text-black font-weight-bold">ContactUs</Link>   
      ].map((text, index) => (
          <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />


    <List>
      {[
          <Link to="/mypage" className="text-black font-weight-bold">
          My Page</Link>, 
          <Link to="/logout" className="text-black font-weight-bold"
          onClick={(e)=>{handleLogout(e)}}>Logout
          </Link>
        ].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
);

  return (
    <div className="font-weight-bold">
      {['Armagyeddon'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            { isLoggedIn ? list_login(anchor) : list_notLogin(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

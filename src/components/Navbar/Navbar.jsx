import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
// import Sitebar from './Sitebar/Sitebar';

const Navbar = (props) => {
  return (
      <nav className={classes.nav}>
        <ul className={classes.menu}>
          <li className={classes.link}><NavLink className={classes.menuLink} activeClassName={classes.activeLink} to='/profile'>Profile</NavLink></li>
          <li className={classes.link}><NavLink className={classes.menuLink} activeClassName={classes.activeLink} to='/dialogs'>Messages</NavLink></li>
          <li className={classes.link}><NavLink className={classes.menuLink} activeClassName={classes.activeLink} to='/users'>Users</NavLink></li>
          <li className={classes.link}><NavLink className={classes.menuLink} activeClassName={classes.activeLink} to='/news'>News</NavLink></li>
          <li className={classes.link}><NavLink className={classes.menuLink} activeClassName={classes.activeLink} to='/music'>Music</NavLink></li>
          <li className={classes.link}><NavLink className={classes.menuLink} activeClassName={classes.activeLink} to='/settings'>Settings</NavLink></li>
        </ul>

        {/* <Sitebar state={props.state}/> */}
      </nav>

      
  )
}

export default Navbar;
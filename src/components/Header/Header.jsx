import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css'

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img 
        className={styles.logo} 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png" 
        alt="logo"
      />
      <div className={styles.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} - <button onClick={props.logoutThunkCreator}>Logout</button></div> 
        : <NavLink to='/login'>Login</NavLink>} 
      </div>
    </header>
  )
}

export default Header;
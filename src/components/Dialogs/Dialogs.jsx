import React from "react";
import classes from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>

        <div className={classes.dialog + ' ' + classes.active}>
          <NavLink to='/dialogs/1'>
          Пользователь
          </NavLink>
        </div>

        <div className={classes.dialog}>
          <NavLink to='/dialogs/2'>
            Пользователь
          </NavLink>
        </div>

        <div className={classes.dialog}>
          <NavLink to='/dialogs/3'>
            Пользователь
          </NavLink>
        </div>

        <div className={classes.dialog}>
          <NavLink to='/dialogs/4'>
            Пользователь
          </NavLink>
        </div>

      </div>

      <div className={classes.messages}>
        <div className={classes.message}>Сообщение</div>
        <div className={classes.message}>Сообщение</div>
        <div className={classes.message}>Сообщение</div>
        <div className={classes.message}>Сообщение</div>
      </div>
    </div>
  )
}

export default Dialogs;
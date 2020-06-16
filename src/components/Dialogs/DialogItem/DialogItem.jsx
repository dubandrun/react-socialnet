import React from "react";
import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
  const path = '/dialogs/' + props.id
  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>
        <div >
          <img className={classes.avatar} src={props.avatar} alt="avatar"/>
          {props.name}
        </div>
      </NavLink>
    </div>
  )
}

export default DialogItem;
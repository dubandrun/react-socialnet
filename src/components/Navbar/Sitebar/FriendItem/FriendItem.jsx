import React from 'react';
import classes from './FriendItem.module.css'


const FriendItem = (props) => {
  return (
    <div className={classes.friendItem}>
      <img className={classes.avatar} src={props.avatar} alt="avatar"/>
      <p className={classes.name}>{props.name}</p>
    </div>
  )
}

export default FriendItem
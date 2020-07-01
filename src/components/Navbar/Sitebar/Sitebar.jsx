import React from 'react';
import classes from './Sitebar.module.css'
import FriendItem from './FriendItem/FriendItem';

const Sitebar = (props) => {
let friend = props.state.slice(0, 3).map(
  element => <FriendItem name={element.name} avatar={element.avatar} key={element.id}/>
)

  return (
    <div className='sitebar'>
      <p>Friends</p>
        <div className={classes.friends}>
          {friend}
        </div>
    </div>
  )
}

export default Sitebar;
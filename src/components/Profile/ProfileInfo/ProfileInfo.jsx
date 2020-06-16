import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <img className={classes.backPic} src="https://lh3.googleusercontent.com/proxy/zmSpQxer4L5-KMjR0WepxNUQErmruH4O3xiY5Qo6_X9yaAiaC0oFni7RD0AYkh75w986T1JYTl3iKPyj8tp_xmlk34odITbs6g" alt="background"/>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
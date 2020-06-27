import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
    <div>
      <img className={classes.backPic} src="https://img5.goodfon.ru/wallpaper/nbig/4/da/gory-tsvety-leto-priroda.jpg" alt="background"/>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;
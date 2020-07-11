import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <img className={classes.backPic} src="https://img5.goodfon.ru/wallpaper/nbig/4/da/gory-tsvety-leto-priroda.jpg" alt="background"/>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt=""/>
      </div>
    </div>
  )
}

export default ProfileInfo;
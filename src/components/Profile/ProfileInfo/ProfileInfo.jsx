import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large} alt="profile-avatar"/>
        <ProfileStatus status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
      </div>
    </div>
  )
}

export default ProfileInfo;
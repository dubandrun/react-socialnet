import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = ({profile, status, updateUserStatusThunkCreator}) => {
  if (!profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large} alt="profile-avatar"/>
        <ProfileStatus status={status} updateUserStatusThunkCreator={updateUserStatusThunkCreator}/>
      </div>
    </div>
  )
}

export default ProfileInfo;
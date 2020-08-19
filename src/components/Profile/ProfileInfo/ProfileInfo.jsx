import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/avatar.jpg'


const ProfileInfo = ({profile, status, updateUserStatusThunkCreator, isOwner, saveAvatarThunkCreator}) => {
  if (!profile) {
    return <Preloader />
  }

  const onAvatarSelected = (event) => {
    if (event.target.files.length) {
      saveAvatarThunkCreator(event.target.files[0])
    }
  }

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={styles.mainPhoto} alt="profile-avatar"/>
        { isOwner && <input type={'file'} onChange={onAvatarSelected}/> }
        <ProfileStatus status={status} updateUserStatusThunkCreator={updateUserStatusThunkCreator}/>
      </div>
    </div>
  )
}

export default ProfileInfo;
import React, {useState} from 'react';

import styles from './ProfileInfo.module.css'

import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/avatar.jpg'
import ProfileDataFormReduxForm from './ProfileDataForm';


const ProfileInfo = ({profile, status, updateUserStatusThunkCreator, isOwner, saveAvatarThunkCreator, saveProfileThunkCreator}) => {
  let [editMode, setEditMode] = useState(false)

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
  }

  if (!profile) {
    return <Preloader />
  }

  const onAvatarSelected = (event) => {
    if (event.target.files.length) {
      saveAvatarThunkCreator(event.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfileThunkCreator(formData)
      .then(() => {
        deactivateEditMode()
    })
  }

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={styles.mainPhoto} alt="profile-avatar"/>
        { isOwner && <input type={'file'} onChange={onAvatarSelected}/> }
        {
          editMode 
            ? <ProfileDataFormReduxForm 
                initialValues={profile} 
                profile={profile} 
                onSubmit={onSubmit} 
              /> 
            : <ProfileData 
                goToEditMode={() => {activateEditMode()}} 
                profile={profile} 
                isOwner={isOwner}
              />
        }
        <ProfileStatus status={status} updateUserStatusThunkCreator={updateUserStatusThunkCreator}/>
      </div>
    </div>
  )
}

const Contact = ({contactName, contactValue}) => {
  return (
    <div className={styles.contact}><b>{contactName}</b>: {contactValue}</div>
  )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div>
        <b>Full name: </b> {profile.fullName}
      </div>

      <div>
        <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
      </div>

      {
        profile.lookingForAJob &&
        <div>
          <b>My professional skills: </b> {profile.lookingForAJobDescription}
        </div>
      }
      
      <div>
        <b>About me: </b> {profile.aboutMe}
      </div>

      <div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactName={key} contactValue={profile.contacts[key]}/>
      })}
      </div>
    </div>
  )
}

export default ProfileInfo;

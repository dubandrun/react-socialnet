import React from 'react';

import classes from './Profile.module.css'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from './Posts/PostsContainer'

const Profile = (props) => {
  return (
    <main className={classes.content}>
        <ProfileInfo 
          profile={props.profile} 
          status={props.status} 
          saveProfileThunkCreator={props.saveProfileThunkCreator}
          updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}
          isOwner={props.isOwner}
          saveAvatarThunkCreator={props.saveAvatarThunkCreator}
        />
        <PostsContainer store={props.store} />
    </main>
  )
}

export default Profile;
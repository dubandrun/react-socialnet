import React from 'react';
import classes from './Profile.module.css'

import ProfileInfo from './ProfileInfo/ProfileInfo'
import PostsContainer from './Posts/PostsContainer'

const Profile = (props) => {

  return (
    <main className={classes.content}>
        <ProfileInfo profile={props.profile}/>
        <PostsContainer store={props.store} />
    </main>
  )
}

export default Profile;
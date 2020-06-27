import React from 'react';
import classes from './Profile.module.css'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main className={classes.content}>
        <ProfileInfo />
        <Posts 
          postsData={props.profilePage.postsData} 
          newPostText={props.profilePage.newPostText}
          dispatch={props.dispatch}
          />
    </main>
  )
}

export default Profile;
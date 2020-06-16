import React from 'react';
import classes from './Profile.module.css'
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <main className={classes.content}>
        <ProfileInfo />
        <Posts state={props.state}/>
    </main>
  )
}

export default Profile;
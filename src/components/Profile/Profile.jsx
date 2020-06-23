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
          addPost={props.addPost}
          updatePostText={props.updatePostText}
          />
    </main>
  )
}

export default Profile;
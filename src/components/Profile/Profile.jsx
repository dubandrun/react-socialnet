import React from 'react';
import classes from './Profile.module.css'
import Posts from './Posts/Posts';

const Profile = () => {
  return (
    <main className={classes.content}>
        <img classname={classes.backPic} src="https://lh3.googleusercontent.com/proxy/B_bbAdnZvGur_zk-xyuG5fZ61sFw0fne0CtSPFL_PxdMGK8NsH92F6R1KuZNVYGUj9Q270cydMqAKi4YlCUdd1nfstOGFQaYopyMMThraNvGA-8mybQjLq9iqlWT51lwqtqyZUu_AA" alt="background"/>
        <div>
          ava + description
        </div>
        <Posts />
    </main>
  )
}

export default Profile;
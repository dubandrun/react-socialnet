import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = () => {
  return (
    <div>
      my posts
    
      <div>
        new post
      </div>
      
      <div className={classes.posts}>
        <Post message='Привет' likes='12'/>
        <Post message='Каг' likes='1'/>
        <Post message='делааа' likes='5'/>
      </div>
    </div>
  )
}

export default Posts;
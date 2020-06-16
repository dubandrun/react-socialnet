import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {

  let postsElements = props.state.postsData.map(
    (post) => <Post 
      message={post.text} 
      likes={post.likesCount}/>
    )

  return (
    <div className={classes.postsBlock}>
      <h3>my posts</h3>
    
      <div>
        <div>
          <textarea defaultValue="Enter here"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default Posts;
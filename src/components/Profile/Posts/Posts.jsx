import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {

  let postsElements = props.postsData.map(
    (post) => <Post 
      message={post.text} 
      likes={post.likesCount}/>
    )

  const newPost = React.createRef()

  const addPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    let text = newPost.current.value
    props.updatePostText(text)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>my posts</h3>
    
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPost} placeholder="Enter here" value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default Posts;
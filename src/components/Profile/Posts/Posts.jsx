import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {

  let postsElements = props.posts.map(
    (post) => <Post 
      message={post.text} 
      likes={post.likesCount}
    />
    )

  const newPost = React.createRef()

  const onAddPost = () => {
    props.addPost()
  }

  const onPostChange = () => {
    let text = newPost.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>my posts</h3>
    
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPost} placeholder="Enter here" value={props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default Posts;
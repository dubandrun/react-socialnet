import React from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './Posts.module.css';

import Post from './Post/Post'
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const Posts = React.memo((props) => {
  const postsElements = props.posts.map(
    (post) => <Post 
      message={post.text} 
      likes={post.likesCount}
      key={post.id}
    />
  )

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  const maxLength10 = maxLengthCreator(10)
  const minLength2 = minLengthCreator(2)

  const AddNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field 
            component={Textarea}
            name='newPostText'
            placeholder="Enter here..." 
            validate={[required, maxLength10, minLength2]}
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    )
  }

 const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

  return (
    <div className={classes.postsBlock}>
      <h3>my posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
})

export default Posts;
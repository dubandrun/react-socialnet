// import React from 'react';
import { connect } from "react-redux";

import Posts from './Posts'

import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
    dispatch(updateNewPostTextActionCreator(text))
  },
    addPost: () => {
    dispatch(addPostActionCreator())
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
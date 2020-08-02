// import React from 'react';
import { connect } from "react-redux";

import Posts from './Posts'

import {addPostActionCreator} from '../../../redux/profile-reducer'

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
    dispatch(addPostActionCreator(newPostText))
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
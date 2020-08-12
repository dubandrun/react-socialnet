import React from 'react';
import ReactDOM from 'react-dom'

import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'

let state = {
  postsData: [
    { id: 1, text: "Yo", likesCount: 2 },
    { id: 2, text: "Yo", likesCount: 1 },
  ]
}

it ('adding new post', () => {
  let action = addPostActionCreator('hi, there!')
  let newState = profileReducer(state, action)
  expect (newState.postsData.length).toBe(3)
})

it ('writing text message', () => {
  let action = addPostActionCreator('hi, there!')
  let newState = profileReducer(state, action)
  expect (newState.postsData[2].text).toBe('hi, there!')
})

it ('delete post and decrement length of posts', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)
  expect (newState.postsData.length).toBe(1)
})

it ('after post deleting shouldnt be decremented if id is not correct', () => {
  let action = deletePost(1000)
  let newState = profileReducer(state, action)
  expect (newState.postsData.length).toBe(2)
})
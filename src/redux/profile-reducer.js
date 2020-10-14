import { profileAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

//state для инициализации, чтобы у редьюсера были данные
let initialState = {
  postsData: [
    { id: 1, text: "Yo", likesCount: 2 },
    { id: 2, text: "Yo", likesCount: 1 },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_POST: {
      let newPost = {
        id: 5,
        text: action.newPostText,
        likesCount: 12,
      }
       //делаем глубокое копирование, т.к. мы изменяем массив postData
      //далее делаем копию массива! а не объекта
      return {
        ...state,
        postsData: [...state.postsData, newPost],
      }
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    } 

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
        newPostText: ''
      }
    } 

    case UPDATE_STATUS: {
      return {
        ...state,
        status: action.newStatus
      }
    } 

    case DELETE_POST: {
      return {
        ...state, 
        postsData: state.postsData.filter(p => p.id !== action.postId)
      }
    }

    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state, 
        profile: {...state.profile, photos: action.photos}
      }
    }

    default:
      return state
  }
}

// action creators
export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, 
  profile
})

export const setStatus = (status) => ({
  type: SET_STATUS, 
  status
})

export const deletePost = (postId) => ({
  type: DELETE_POST, 
  postId
})

export const setAvatarSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS, 
  photos
})

export const getProfileInfoThunkCreator = (userId) => async (dispatch) => {

  try {
    const res = await profileAPI.getProfileInfo(userId)
    dispatch(setUserProfile(res))
  }
  catch(error) {
    console.log(error)
  }
}

export const getUserStatusThunkCreator = (userId) => async (dispatch) => {

  try {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatus(res))
  }
  catch(error) {
    console.log(error)
  }
}

export const updateUserStatusThunkCreator = (newStatus) => async (dispatch) => {

  try {
    const res = await profileAPI.updateStatus(newStatus)
    if (res.resultCode === 0) {
      dispatch(setStatus(newStatus))
    }
  } 
  catch(error) {
    console.log(error)
  }
}

export const saveAvatarThunkCreator = (photos) => async (dispatch) => {

  try {
    const res = await profileAPI.saveAvatar(photos)
    if (res.resultCode === 0) {
      dispatch(setAvatarSuccess(res.data.photos))
    }
  }
  catch(error) {
    console.log(error)
  }
}

export const saveProfileThunkCreator = (formData) => async (dispatch, getState) => {

  try {
    const userId = getState().auth.userId
    const res = await profileAPI.saveProfile(formData)
    if (res.resultCode === 0) {
      debugger
      dispatch(getProfileInfoThunkCreator(userId))
    } else {
      dispatch(stopSubmit('contacts', {_error: res.messages[0]}))
      return Promise.reject(res.messages[0])
    }
  }
  catch(error) {
    console.log(error)
  }
}

export default profileReducer
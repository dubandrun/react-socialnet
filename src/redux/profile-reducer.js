import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'

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

export const getProfileInfoThunkCreator = (userId) => 
  (dispatch) => {
    profileAPI.getProfileInfo(userId)
      .then(res => {
        return (
         dispatch(setUserProfile(res))
      )
    })
  }

export const getUserStatusThunkCreator = (userId) => 
  (dispatch) => {
    profileAPI.getStatus(userId)
      .then(res => {
        return (
         dispatch(setStatus(res))
      )
    })
  }

export const updateUserStatusThunkCreator = (newStatus) => 
  (dispatch) => {
    profileAPI.updateStatus(newStatus)
      .then(res => {
        if (res.resultCode === 0) {
          dispatch(setStatus(newStatus))
        }
    })
  }


export default profileReducer
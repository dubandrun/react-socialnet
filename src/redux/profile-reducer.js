import { userAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

//state для инициализации, чтобы у редьюсера были данные
let initialState = {
  postsData: [
    { id: 1, text: "Yo", likesCount: 2 },
    { id: 2, text: "Yo", likesCount: 1 },
  ],
  newPostText: '',
  profile: null
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {

    case ADD_POST: {
      let newPost = {
        id: 5,
        text: state.newPostText,
        likesCount: 12,
      }
       //делаем глубокое копирование, т.к. мы изменяем массив postData
      //далее делаем копию массива! а не объекта
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ''
      }
    }
    
    case UPDATE_NEW_POST_TEXT: {
      //не делаем глубокое копирование, т.к. мы изменяем только примитив(строку), массивы и т.д. не трогаем, поэтому нет необходимости
      return {
        ...state,
        newPostText: action.newText
      }
    }  

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    } 

    default:
      return state
  }
}

// action creators
export const addPostActionCreator = () => ({
  type: ADD_POST
})

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT, 
  newText: text
})

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, 
  profile
})

export const getProfileInfoThunkCreator = (userId) => { 
  return (dispatch) => {
    userAPI.getProfileInfo(userId)
      .then(res => {
        return (
         dispatch(setUserProfile(res))
      )
    })
  }
}

export default profileReducer
import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = 'SET-USER-DATA'


//state для инициализации, чтобы у редьюсера были данные
let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch(action.type) {

    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload
      }
    }

    default:
      return state
  }
}


// action creators
export const setAuthUserData = (userId, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: {userId, login, email, isAuth}
})


export const getAuthThunkCreator = () => (dispatch) => {
 return authAPI.getAuth()
    .then(res => {if (res.resultCode === 0) {
      let {id, login, email} = res.data
      dispatch(setAuthUserData(id, login, email, true))
    }})
}

export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe)
    .then(res => {
      if (res.resultCode === 0) {
        dispatch(getAuthThunkCreator())
      } else {
        
        let message = res.messages.length > 0 ? res.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))//специальный action от redux-form, _error - общая ошибка для всех полей
      }
  })
}

export const logoutThunkCreator = () => (dispatch) => {
  authAPI.logout()
    .then(res => {if (res.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
  }})
}

export default authReducer
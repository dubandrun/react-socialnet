import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form"
//создание уникальных actions по концепции react-ducks
const SET_USER_DATA = 'react-network/auth/SET-USER-DATA'


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


export const getAuthThunkCreator = () => async (dispatch) => {
  const res = await authAPI.getAuth()
  if (res.resultCode === 0) {
      let {id, login, email} = res.data
      dispatch(setAuthUserData(id, login, email, true))
  }
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {
  const res = await authAPI.login(email, password, rememberMe)
    if (res.resultCode === 0) {
      dispatch(getAuthThunkCreator())
    } else {
      let message = res.messages.length > 0 ? res.messages[0] : "Some error"
      dispatch(stopSubmit('login', {_error: message}))//специальный action от redux-form, _error - общая ошибка для всех полей
    }
}

export const logoutThunkCreator = () => async (dispatch) => {
  const res = await authAPI.logout()
  if (res.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export default authReducer
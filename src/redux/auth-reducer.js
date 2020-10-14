import { authAPI, securityAPI } from "../api/api"
import { stopSubmit } from "redux-form"
//создание уникальных actions по концепции react-ducks
const SET_USER_DATA = 'react-network/auth/SET-USER-DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET-CAPTCHA-URL-SUCCESS'


//state для инициализации, чтобы у редьюсера были данные
let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  captchaUrl: null
}

const authReducer = (state = initialState, action) => {

  switch(action.type) {

    case SET_USER_DATA: 
    case GET_CAPTCHA_URL_SUCCESS: {
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

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl}
})


export const getAuthThunkCreator = () => async (dispatch) => {
  const res = await authAPI.getAuth()
  if (res.resultCode === 0) {
      let {id, login, email} = res.data
      dispatch(setAuthUserData(id, login, email, true))
  }
}

export const loginThunkCreator = (email, password, rememberMe, captcha) => async (dispatch) => {
  const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.resultCode === 0) {
      dispatch(getAuthThunkCreator())
    } else {
      if (res.resultCode === 10) {
        dispatch(getCaptchaUrlThunkCreator())
      }

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

export const getCaptchaUrlThunkCreator = () => async (dispatch) => {
  const res = await securityAPI.getCaptchaUrl()
  const captchaUrl = res.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer
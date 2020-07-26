import { userAPI } from "../api/api"

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
        ...action.data,
        isAuth: true
      }
    }

    default:
      return state
  }
}


// action creators
 export const setAuthUserData = (userId, login, email) => ({
  type: SET_USER_DATA,
  data: {userId, login, email}
})


export const getAuthThunkCreator = () => { 
  return (dispatch) => {
    userAPI.getAuth()
    .then(res => {if (res.resultCode === 0) {
      let {id, login, email} = res.data
      dispatch(setAuthUserData(id, login, email))
    }})
  }
}

export default authReducer
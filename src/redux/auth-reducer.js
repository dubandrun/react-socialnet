
const SET_USER_DATA = 'SET-USER-DATA'


//state для инициализации, чтобы у редьюсера были данные
let initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: true
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

export default authReducer
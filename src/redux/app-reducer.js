import { getAuthThunkCreator } from "./auth-reducer"

const SET_INITIALIZED = 'SET-INITIALIZED'


//state для инициализации, чтобы у редьюсера были данные
let initialState = {
  initialazied: false
}

const appReducer = (state = initialState, action) => {

  switch(action.type) {

    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }

    default:
      return state
  }
}


// action creators
export const initialized = () => ({
  type: SET_INITIALIZED
})

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthThunkCreator())
  promise.then(() => {
    dispatch(initialized())
  })
}

export default appReducer
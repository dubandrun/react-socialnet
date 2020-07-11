
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING'

//state для инициализации, чтобы у редьюсера были данные
let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false
}

const usersReducer = (state = initialState, action) => {

  switch(action.type) {

    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }

    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    }

    case FOLLOW: {
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {...user, following: true}
          }
          return user
        })
      }
    }
    
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {...user, following: false}
          }
          return user
        })
      }
    }  

    case SET_CURRENT_PAGE: {
      return {
        ...state, currentPage: action.currentPage
      }
    }

    case TOGGLE_IS_LOADING: {
      return {
        ...state, isLoading: action.toggle
      }
    }

    default:
      return state
  }
}

// action creators
export const follow = (userID) => ({
  type: FOLLOW,
  userId: userID
})

export const unfollow = (userID) => ({
  type: UNFOLLOW,
  userId: userID
})

export const setUsersTotalCount = (totalCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount
})

export const setUsers = (users) => ({
  type: SET_USERS,
  users: users
})

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage
})

export const setPreloader = (toggle) => ({
  type: TOGGLE_IS_LOADING,
  toggle
})

export default usersReducer
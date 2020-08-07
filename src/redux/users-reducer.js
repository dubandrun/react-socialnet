import { userAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

//state для инициализации, чтобы у редьюсера были данные
let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: false,
  followingProgress: []
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

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state, 
        followingProgress: action.toggle 
          ?  [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id !== action.userId), 
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

export const toggleFollowingProgress = (toggle, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  toggle,
  userId
})

//thunk

export const requestUsersThunkCreator = (currentPage, pageSize) => { 
  return (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(setPreloader(true))
    userAPI.getUsers(currentPage, pageSize)
    .then(res => {
      dispatch(setPreloader(false))
      return (
        dispatch(setUsers(res.items)),
        dispatch(setUsersTotalCount(res.totalCount))
      )
    })
  }
}

export const followThunkCreator = (userId) => { 
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    userAPI.followUser(userId).then(res => {
      if (res.resultCode === 0) {
         dispatch(follow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}

export const unfollowThunkCreator = (userId) => { 
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    userAPI.unfollowUser(userId).then(res => {
      if (res.resultCode === 0) {
         dispatch(unfollow(userId))
      }
    dispatch(toggleFollowingProgress(false, userId))
    })
  }
}

export default usersReducer
import { userAPI } from "../api/api"
import { updateObjectInArray } from "../utils/reducers-helper"

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
  totalItemsCount: 0,
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
        totalItemsCount: action.totalCount
      }
    }

    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {following: true})
      }
    }
    
    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {following: false})
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

export const requestUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    dispatch(setPreloader(true))
    const res = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setPreloader(false))
    dispatch(setUsers(res.items))
    dispatch(setUsersTotalCount(res.totalCount))

  }

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId))
  let res = await apiMethod(userId)
  if (res.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const followThunkCreator = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userId), follow)
      
  }

export const unfollowThunkCreator = (userId) => async (dispatch) => {
  followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userId), unfollow)
  }

export default usersReducer



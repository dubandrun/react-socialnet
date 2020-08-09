import { createSelector } from 'reselect'

const getUsersSelector = (state) => {
  return state.usersPage.users
}
export const getUsers = createSelector(getUsersSelector, (users) => users)

const getPageSizeSelector = (state) => {
  return state.usersPage.pageSize
}
export const getPageSize = createSelector(getPageSizeSelector, (pageSize) => {return pageSize})

const getTotalUsersCountSelector = (state) => {
  return state.usersPage.totalUsersCount
}
export const getTotalUsersCount = createSelector(getTotalUsersCountSelector, (totalUsersCount) => totalUsersCount)

const getCurrentPageSelector = (state) => {
  return state.usersPage.currentPage
}
export const getCurrentPage= createSelector(getCurrentPageSelector, (currentPage) => currentPage)

const getLoadingSelector = (state) => {
  return state.usersPage.isLoading
}
export const getLoading = createSelector(getLoadingSelector, (isLoading) => isLoading)

const getFollowingProgressSelector = (state) => {
  return state.usersPage.followingProgress
}
export const getFollowingProgress = createSelector(getFollowingProgressSelector, (followingProgress) => followingProgress)


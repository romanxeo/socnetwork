import {createSelector} from "reselect"
import {UsersDataArray} from "./usersReducer";
import {AppStateType} from "./redux-store";

export const getUsersData = (state: AppStateType) => {
  return state.usersPage.usersData
}

export const getUserDataSelector = createSelector(getUsersData, (users: Array<UsersDataArray>) => {
  return users.filter(u => true)
})

export const getPageSize = (state: any) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: any) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: any) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: any) => {
  return state.usersPage.isFetching
}

export const getFollowingProgress = (state: any) => {
  return state.usersPage.followingProgress
}

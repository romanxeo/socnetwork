//типы для редьюеров
import {usersAPI} from "../api/api";

export const followSuccessAC = (userID: number) => {
  return {type: 'USERS/FOLLOW', userID} as const
}

export const unfollowSuccessAC = (userID: number) => {
  return {type: 'USERS/UNFOLLOW', userID} as const
}

export const setUsersAC = (usersData: Array<UsersDataArray>) => {
  return {type: 'USERS/SET_USERS', usersData} as const
}

export const setCurrentPageAC = (currentPage: number) => {
  return {type: 'USERS/SET_CURRENT_PAGE', currentPage} as const
}

export const setTotalUsersCountAC = (totalUsersCount: number) => {
  return {type: 'USERS/SET_TOTAL_USERS_COUNT', totalUsersCount} as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
  return {type: 'USERS/TOGGLE_IS_FETCHING', isFetching} as const
}

export const toggleFollowingProgressAC = (followingProgress: boolean, userId: number) => {
  return {
    type: 'USERS/TOGGLE_FOLLOWING_PROGRESS',
    followingProgress,
    userId
  } as const
}

export type followSuccessAT = ReturnType<typeof followSuccessAC>
export type unfollowSuccessAT = ReturnType<typeof unfollowSuccessAC>
export type setUsersAT = ReturnType<typeof setUsersAC>
export type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>
export type toggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>
export type toggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgressAC>

export type ActionTypes = followSuccessAT
  | unfollowSuccessAT
  | setUsersAT
  | setCurrentPageAT
  | setTotalUsersCountAT
  | toggleIsFetchingAT
  | toggleFollowingProgressAT


//типизируем объект фото
export type photosType = {
  small: null | string
  large: null | string
}

//типизируем массив юзеров
export type UsersDataArray = {
  name: string
  id: number
  uniqueUrlName: null
  photos: photosType
  status: null
  followed: boolean
}

//типизируем стейт
export type initialStateType = {
  usersData: Array<UsersDataArray>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingProgress: Array<number>
}

//инициализируем стейт с данными
const initialState: initialStateType = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingProgress: []
}

//userReducer
const usersReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
  switch (action.type) {
    case 'USERS/FOLLOW': {
      return {
        ...state,
        usersData: state.usersData.map(u => u.id === action.userID ? {
          ...u,
          followed: true
        } : u)
      } //делаем копию стейта и копируем массив юзеров по средствам мап
      // (мап возвращает копию масива и мап меняет значение параметра фоловед и ретурним ее
    }
    case 'USERS/UNFOLLOW': {
      return {
        ...state,
        usersData: state.usersData.map(u => u.id === action.userID ? {
          ...u,
          followed: false
        } : u)
      } //делаем копию стейта и копируем массив юзеров по средствам мап
      // (мап возвращает копию масива и мап меняет значение параметра фоловед и ретурним ее
    }
    case 'USERS/SET_USERS': {
      return {...state, usersData: action.usersData} //делаем глубокую копию существущего стейта
      //по изначальной задумке там должно быть пусто и передаем туда массив юзеров которые должны прийти с сервера
    }
    case 'USERS/SET_CURRENT_PAGE': {
      return {...state, currentPage: action.currentPage}
      //создаем копию стейта и закидываем значение текущей выбранной страницы которая пришла через экнш
    }
    case 'USERS/SET_TOTAL_USERS_COUNT': {
      return {...state, totalUsersCount: action.totalUsersCount}
      //создаем копию стейта и закидываем значение общего числа юзеров которые пришли через экнш
    }
    case 'USERS/TOGGLE_IS_FETCHING': {
      return {...state, isFetching: action.isFetching}
    }
    case 'USERS/TOGGLE_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingProgress: action.followingProgress
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter(id => id != action.userId)
      }
    }
    default: {
      return state;
    }
  }
}




//thunk
export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetchingAC(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetchingAC(false));
      dispatch(setUsersAC(data.items));
      dispatch(setTotalUsersCountAC(data.totalCount));
    })
  }
}

export const unfollow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingProgressAC(true, userId));
    usersAPI.unfollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccessAC(userId));
      }
      dispatch(toggleFollowingProgressAC(false, userId));
    })
  }
}

export const follow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingProgressAC(true, userId));
    usersAPI.follow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(followSuccessAC(userId));
      }
      dispatch(toggleFollowingProgressAC(false, userId));
    })
  }
}


export default usersReducer
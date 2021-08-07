import {v1} from "uuid";

//типы для редьюеров
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

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
    isFetching: boolean
}

//типизируем action который может приходить
export type ActionTypes = ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

//инициализируем стейт с данными
const initialState: initialStateType = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

//userReducer
const usersReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => u.id === action.userID ? {...u, followed: true} : u)
            } //делаем копию стейта и копируем массив юзеров по средствам мап
            // (мап возвращает копию масива и мап меняет значение параметра фоловед и ретурним ее
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => u.id === action.userID ? {...u, followed: false} : u)
            } //делаем копию стейта и копируем массив юзеров по средствам мап
            // (мап возвращает копию масива и мап меняет значение параметра фоловед и ретурним ее
        }
        case SET_USERS: {
            return {...state, usersData: action.usersData} //делаем глубокую копию существущего стейта
            //по изначальной задумке там должно быть пусто и передаем туда массив юзеров которые должны прийти с сервера
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
            //создаем копию стейта и закидываем значение текущей выбранной страницы которая пришла через экнш
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
            //создаем копию стейта и закидываем значение общего числа юзеров которые пришли через экнш
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: {
            return state;
        }
    }
}


export const follow = (userID: number) => {
    return (
        {
            type: FOLLOW,
            userID: userID
        }
    ) as const
}

export const unfollow = (userID: number) => {
    return (
        {
            type: UNFOLLOW,
            userID: userID
        }
    ) as const
}

export const setUsers = (usersData: Array<UsersDataArray>) => {
    return (
        {
            type: SET_USERS,
            usersData: usersData
        }
    ) as const
}

export const setCurrentPage = (currentPage: number) => {
    return (
        {
            type: SET_CURRENT_PAGE,
            currentPage: currentPage
        }
    ) as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return (
        {
            type: SET_TOTAL_USERS_COUNT,
            totalUsersCount: totalUsersCount
        }
    ) as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return (
        {
            type: TOGGLE_IS_FETCHING,
            isFetching: isFetching
        }
    ) as const
}

export default usersReducer
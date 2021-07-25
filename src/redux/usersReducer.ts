import {v1} from "uuid";

//типы для редьюеров
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

//типизируем объект местонахождения
//export type locationType = {
//    country: string
//    city: string
//}

/*id: string
firstName: string
lastName: string
avatar: string
status: string
followed: boolean
location: locationType*/

/*{
    id: v1(),
        firstName: 'Denis',
    lastName: 'Ivanov',
    avatar: 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png',
    status: 'HELLO',
    followed: false,
    location: {
    country: 'Ukraine',
        city: 'Kyiv'
}
},
{
    id: v1(),
        firstName: 'Kirril',
    lastName: 'Petrov',
    avatar: 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png',
    status: 'GOOD TIME',
    followed: false,
    location: {
    country: 'Ukraine',
        city: 'Lviv'
}
},
{
    id: v1(),
        firstName: 'Anna',
    lastName: 'Potapova',
    avatar: 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png',
    status: 'HI',
    followed: false,
    location: {
    country: 'Ukraine',
        city: 'Kherson'
}
},
{
    id: v1(),
        firstName: 'Vasiliy',
    lastName: 'VASYA',
    avatar: 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png',
    status: 'HELLO',
    followed: false,
    location: {
    country: 'Russia',
        city: 'Moscow'
}
}*/


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
    usersData: Array<UsersDataArray>
}

//типизируем action который может приходить
export type ActionTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

//инициализируем стейт с данными
const initialState: initialStateType = {
    usersData: []
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
            return {...state, usersData: [...state.usersData, ...action.usersData]} //делаем глубокую копию существущего стейта
            //по изначальной задумке там должно быть пусто и передаем туда массив юзеров которые должны прийти с сервера
        }
        default: {
            return state;
        }
    }
}


export const followAC = (userID: number) => {
    return (
        {
            type: FOLLOW,
            userID: userID
        }
    ) as const
}

export const unfollowAC = (userID: number) => {
    return (
        {
            type: UNFOLLOW,
            userID: userID
        }
    ) as const
}

export const setUsersAC = (usersData: Array<UsersDataArray>) => {
    return (
        {
            type: SET_USERS,
            usersData: usersData
        }
    ) as const
}

export default usersReducer
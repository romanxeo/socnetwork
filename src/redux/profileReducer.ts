import {v1} from "uuid";

//типы для редьюеров
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

//типизируем массив постов
export type PostsDataArray = {
    id: string
    name: string
    post: string
    likesCount: number
}

//типизируем стейт
export type contactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type photosType = {
    small: string | null
    large: string | null
}
export type profileType = {
    aboutMe: string | null
    contacts: contactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number
    photos: photosType
}
export type initialStateType = {
    postsData: Array<PostsDataArray>
    newPostText: string
    profile: profileType
    isFetching: boolean
}

//типизируем action который может приходить
export type ActionTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof toggleIsFetching>

//инициализируем стейт с данными
const initialState: initialStateType = {
    postsData: [
        {id: v1(), name: 'VALERA', post: 'HERLfdE', likesCount: 43},
        {id: v1(), name: 'Dimon', post: 'HERdsfLfdE', likesCount: 421},
        {id: v1(), name: 'Kukareku', post: 'HEfsdfRLfdE', likesCount: 13},
        {id: v1(), name: 'Stop', post: 'qweHERLfdE', likesCount: 5},
    ],
    newPostText: '',
    profile: {
        aboutMe: 'aboutMe',
        contacts: {
            facebook: 'facebook',
            website: 'website',
            vk: 'vk',
            twitter: 'twitter',
            instagram: 'instagram',
            youtube: 'youtube',
            github: 'github',
            mainLink: 'mainLink'
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'lookingForAJobDescription',
        fullName: 'fullName',
        userId: 0,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    isFetching: false
}

//profileReducer
const profileReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            //создаем новый объект поста
            const newPost: PostsDataArray = {
                id: v1(),
                name: 'name',
                post: state.newPostText,
                likesCount: 0
            }
            //делаем глубокую копию объекта стейт и ретурним ее
            return {
                ...state,
                postsData: [...state.postsData, newPost], //делаем глубокую копию сообщений и в конец добавляем новой пост
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            //делаем копию стейта и вносим изменение обновление строки ввода нового поста и ретурним ее
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default: {
            //возращение стейта по дефолту если нет нужного типа
            return state;
        }
    }
}

export const addPostAC = () => {
    return (
        {type: ADD_POST}
    ) as const
}
export const updateNewPostTextAC = (newText: string) => {
    return (
        {
            type: UPDATE_NEW_POST_TEXT,
            newText: newText
        }
    ) as const
}
export const setUserProfile = (profile: any) => {
    return (
        {
            type: SET_USER_PROFILE,
            profile
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

export default profileReducer;
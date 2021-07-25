import {v1} from "uuid";

//типы для редьюеров
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

//типизируем массив постов
export type PostsDataArray = {
    id: string
    name: string
    post: string
    likesCount: number
}

//типизируем стейт
export type initialStateType = {
    postsData: Array<PostsDataArray>
    newPostText: string
}

//типизируем action который может приходить
export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

//инициализируем стейт с данными
const initialState: initialStateType = {
    postsData: [
        {id: v1(), name: 'VALERA', post: 'HERLfdE', likesCount: 43},
        {id: v1(), name: 'Dimon', post: 'HERdsfLfdE', likesCount: 421},
        {id: v1(), name: 'Kukareku', post: 'HEfsdfRLfdE', likesCount: 13},
        {id: v1(), name: 'Stop', post: 'qweHERLfdE', likesCount: 5},
    ],
    newPostText: ''
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

export default profileReducer;
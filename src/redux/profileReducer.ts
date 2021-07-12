import {v1} from "uuid";

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
export type ActionTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>

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
        case ADD_POST:

            //создаем новый обхект поста
            const newPost: PostsDataArray = {
                id: v1(),
                name: 'name',
                post: state.newPostText,
                likesCount: 0
            }

            //делаем глубокую копию объекта стейт
            let copyState: initialStateType = {...state}
            copyState.postsData = [...state.postsData]

            //вносим изменения добавляем пост и затираем текст в текстариа
            copyState.postsData.push(newPost);
            copyState.newPostText = '';

            return copyState;
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }


        //почемуто не работает
        /*            let copyState = {...state};
                    copyState.newPostText = action.newText;
                    return copyState;

                    */
        /*            */
        // state.newPostText = action.newText;
        // return state;

        //делаем глубокую копию объекта стейт
        // return state;


        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return (
        {type: ADD_POST}
    ) as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return (
        {type: UPDATE_NEW_POST_TEXT, newText: newText}
    ) as const
}

export default profileReducer;
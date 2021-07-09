import {v1} from "uuid";
import {PostsDataArray} from "./store";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    postsData: [
        {id: v1(), name: 'VALERA', post: 'HERLfdE', likesCount: 43},
        {id: v1(), name: 'Dimon', post: 'HERdsfLfdE', likesCount: 421},
        {id: v1(), name: 'Kukareku', post: 'HEfsdfRLfdE', likesCount: 13},
        {id: v1(), name: 'Stop', post: 'qweHERLfdE', likesCount: 5},

    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostsDataArray = {
                id: v1(),
                name: 'name',
                post: state.newPostText,
                likesCount: 0
            }
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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
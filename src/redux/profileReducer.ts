import {v1} from "uuid";
import {PostsDataArray} from "./state";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state, action) => {

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
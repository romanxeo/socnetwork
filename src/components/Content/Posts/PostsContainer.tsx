import React from 'react';
import {addPostActionCreator, PostsDataArray, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import NewPost from "./NewPost/NewPost";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

//Типизируем мап то пропс
type MSTPPropsType = {
    postsData: Array<PostsDataArray>
    newPostText: string
}

//тиизируем диспатч то пропс
type MDTPPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

//объединяем тип
export type NewPostPropsType = MSTPPropsType & MDTPPropsType

const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextActionCreator(newText));
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)
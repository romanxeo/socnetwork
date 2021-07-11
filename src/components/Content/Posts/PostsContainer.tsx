import React from 'react';
import {addPostActionCreator, initialStateType, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import NewPost from "./NewPost/NewPost";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type NewPostPropsType = initialStateType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): initialStateType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextActionCreator(newText));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)
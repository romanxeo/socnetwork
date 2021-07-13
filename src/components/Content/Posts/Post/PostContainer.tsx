import React from 'react';
import {PostsDataArray} from "../../../../redux/profileReducer";
import {connect} from "react-redux";
import Post from "./Post";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux"

//Типизируем мап то пропс
type MSTPPropsType = {
    postsData: Array<PostsDataArray>
    /*    newPostText: string*/
};

//тиизируем диспатч то пропс
type MDTPPropsType = {
    /*    addPost: () => void
        updateNewPostText: (newText: string) => void*/
};

//объединяем тип
export type PostPropsType = MSTPPropsType & MDTPPropsType

const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
    return {
        /*        addPost: () => {
                    dispatch(addPostActionCreator());
                },
                updateNewPostText: (newText: string) => {
                    dispatch(updateNewPostTextActionCreator(newText));
                }*/
    }
}

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)
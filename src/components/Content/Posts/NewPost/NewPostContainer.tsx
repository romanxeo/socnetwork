import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profileReducer";
import {connect} from "react-redux";
import NewPost from "./NewPost";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";

//Типизируем мап то пропс
type MSTPPropsType = {
    /*    postsData: Array<PostsDataArray>*/
    newPostText: string
}

//тиизируем диспатч то пропс
type MDTPPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
};

//объединяем тип
export type NewPostPropsType = MSTPPropsType & MDTPPropsType

const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        /*        postsData: state.profilePage.postsData,*/
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText));
        }
    }
}

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)
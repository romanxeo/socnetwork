import React from 'react';
import {connect} from "react-redux";
import Post from "./Post";
import {PostsDataArray} from "../../../../redux/profileReducer";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux"

//Типизируем мап то пропс
type MSTPPropsType = {
    postsData: Array<PostsDataArray>
};

//тиизируем диспатч то пропс
type MDTPPropsType = {
};

//объединяем тип
export type PostPropsType = MSTPPropsType & MDTPPropsType

const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        postsData: state.profilePage.postsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
    return {}
}

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)
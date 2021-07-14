import React from 'react'
import {MessagesDataArray} from "../../../../redux/dialogsReducer";
import {connect} from "react-redux";
import Message from "./Message";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux"

//Типизируем мап то пропс
type MSTPPropsType = {
    messagesData: Array<MessagesDataArray>
};

//тиизируем диспатч то пропс
type MDTPPropsType = {};

//объединяем тип
export type MessagePropsType = MSTPPropsType & MDTPPropsType

const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        messagesData: state.dialogsPage.messagesData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
    return {}
}

export const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message)
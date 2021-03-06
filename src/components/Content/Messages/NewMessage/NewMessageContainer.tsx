import React from 'react'
import {addMessageAC, updateNewMessageTextAC} from "../../../../redux/dialogsReducer";
import {connect} from "react-redux";
import NewMessage from "./NewMessage";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux"

//Типизируем мап то пропс
type MSTPPropsType = {
    newMessageText: string
};

//тиизируем диспатч то пропс
type MDTPPropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
};

//объединяем тип
export type NewMessagePropsType = MSTPPropsType & MDTPPropsType

const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
        },
        updateNewMessageText: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText));
        }
    }
}

export const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage)
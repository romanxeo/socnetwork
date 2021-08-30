import React from 'react'
import {DialogsDataArray} from "../../../../redux/dialogsReducer";
import {connect} from "react-redux";
import Dialog from "./Dialog";
import {AppStateType} from "../../../../redux/redux-store";
import {compose, Dispatch} from "redux"
import {withAuthRedirectHOC} from "../../common/hoc/AuthRedirectHOC";
import {withRouter} from "react-router-dom";

//Типизируем мап то пропс
type MSTPPropsType = {
    dialogsData: Array<DialogsDataArray>
};

//тиизируем диспатч то пропс
type MDTPPropsType = {};

//объединяем тип
export type DialogPropsType = MSTPPropsType & MDTPPropsType

const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        dialogsData: state.dialogsPage.dialogsData
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
    return {}
}

export const DialogContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter,
  withAuthRedirectHOC,
)(Dialog)




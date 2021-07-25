import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import User from './User';
import {AppStateType} from "../../../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersDataArray} from "../../../../redux/usersReducer";


//Типизируем мап стейт то пропс
type MSTPPropsType = {
    usersData: Array<UsersDataArray>
};

//типизируем мап диспатч то пропс
type MDTPPropsType = {
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (usersData: Array<UsersDataArray>) => void
};

//объединяем тип
export type UserPropsType = MSTPPropsType & MDTPPropsType

//мап стейт то пропс
const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        usersData: state.usersPage.usersData
    }
}

//мап диспатч то пропс
const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
    return {
        follow: (userID: string) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: string) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (usersData: Array<UsersDataArray>) => {
            dispatch(setUsersAC(usersData));
        }
    }
}

//создание контейнеркой компоненты
export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)
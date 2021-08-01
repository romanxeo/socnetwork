import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import User from './User';
import {AppStateType} from "../../../../redux/redux-store";
import {
    followAC,
    initialStateType,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersDataArray
} from "../../../../redux/usersReducer";
import UserC from "./UserC";


//Типизируем мап стейт то пропс
type MSTPPropsType = initialStateType;

//типизируем мап диспатч то пропс
type MDTPPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (usersData: Array<UsersDataArray>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
};

//объединяем тип
export type UserPropsType = MSTPPropsType & MDTPPropsType

//мап стейт то пропс
const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

//мап диспатч то пропс
const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (usersData: Array<UsersDataArray>) => {
            dispatch(setUsersAC(usersData));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage));
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount));
        }
    }
}

//создание контейнеркой компоненты
export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserC)
import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";

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

import axios from "axios";
import UserNew from "./UserNew";


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


class UserContainerC extends React.Component<UserPropsType> {

    //когда компонента монтируется вызывается тело метода один раз
    componentDidMount() {
        this.getUsers();
    }

    //метод который вызывается когда мы нажимаем кнопку получить еще юзеров
    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    //метод для кнопки переключения страницы
    onPageChanged = (b: number) => {
        //меняем стейт
        this.props.setCurrentPage(b)

        //даем новый запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${b}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        /*        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

                let pagesButtonSwitcher = [];
                pagesButtonSwitcher.push(1)

                for (let i = this.props.currentPage-3; i <= this.props.currentPage+3; i++) {
                    if (i < 3) {
                        pagesButtonSwitcher.push(2, 3, 4, 5, 6)
                        break;
                    }
                    else if (i > pagesCount - 3) {
                        pagesButtonSwitcher.push(pagesCount - 1, pagesCount - 2, pagesCount - 3, pagesCount - 4)
                        break;
                    }
                    else {
                        pagesButtonSwitcher.push(i)
                    }
                }
                pagesButtonSwitcher.push(pagesCount)*/

        return (

            <UserNew totalUsersCount={this.props.totalUsersCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     usersData={this.props.usersData}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}/>

            /*<div>
                <div>
                    {pagesButtonSwitcher.map(b =>
                        <button className={this.props.currentPage === b ? s.selectedPage : s.nonSelectedPage}
                                onClick={(e) => {
                                    this.onPageChanged(b)
                                }}>{b}</button>
                    )}
                </div>


                {this.props.usersData.map(u =>

                    <div key={u.id} className={s.item}>
                        <img className={s.avatar}
                             src={u.photos.small != null
                                 ? u.photos.small
                                 : 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png'}
                             alt="img"/>
                        <span>{u.name} </span>
                        <span>{u.id} </span>
                        <span>{u.status} </span>
                            <span>{u.photos.small} </span>
                        <span>{u.photos.large} </span>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>FOLLOW</button>}
                    </div>
                )}
                {this.props.usersData.length}
                <button onClick={this.getUsers}>Get users</button>
            </div>*/
        )
    }
}


//создание контейнеркой компоненты
export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainerC)










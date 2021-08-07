import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {
    UsersDataArray,
    initialStateType,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow
} from "../../../../redux/usersReducer";
import axios from "axios";
import UserNew from "./UserNew";
import Preloader from '../../common/preloader/Preloader';


//Типизируем мап стейт то пропс
type MSTPPropsType = initialStateType;

/*//типизируем мап диспатч то пропс
type MDTPPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (usersData: Array<UsersDataArray>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
};*/

type mdtpType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (usersData: Array<UsersDataArray>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

//объединяем тип
export type UserPropsType = MSTPPropsType & mdtpType

//мап стейт то пропс
const mapStateToProps = (state: AppStateType): MSTPPropsType => {
    return {
        usersData: state.usersPage.usersData,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

//мап диспатч то пропс
/*const mapDispatchToProps = (dispatch: Dispatch): MDTPPropsType => {
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
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }
    }
}*/

let mdtp: mdtpType = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}

class UserContainerC extends React.Component<UserPropsType> {

    //когда компонента монтируется вызывается тело метода один раз
    componentDidMount() {
        this.getUsers();
    }

    //метод который вызывается когда мы нажимаем кнопку получить еще юзеров
    getUsers = () => {

        this.props.toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)

            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    //метод для кнопки переключения страницы
    onPageChanged = (b: number) => {
        this.props.toggleIsFetching(true)

        //меняем стейт
        this.props.setCurrentPage(b)

        //даем новый запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${b}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)

            this.props.setUsers(response.data.items)
        })
    }

    render() {

        return (
            <div>
                {this.props.isFetching
                    ? <Preloader/>
                    : <UserNew totalUsersCount={this.props.totalUsersCount}
                               pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage}
                               onPageChanged={this.onPageChanged}
                               usersData={this.props.usersData}
                               follow={this.props.follow}
                               unfollow={this.props.unfollow}/>
                }
            </div>
        )
    }
}

//создание контейнеркой компоненты
export const UserContainer = connect(mapStateToProps, mdtp)(UserContainerC)










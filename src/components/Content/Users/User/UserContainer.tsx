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
  unfollow, toggleFollowingProgress
} from "../../../../redux/usersReducer";
import UserNew from "./UserNew";
import Preloader from '../../common/preloader/Preloader';
import {usersAPI} from '../../../../api/api';


//Типизируем мап стейт то пропс
type MSTPType = initialStateType;

type MDTPType = {
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  setUsers: (usersData: Array<UsersDataArray>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalUsersCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleFollowingProgress: (followingProgress: boolean, userId: number) => void
}

//объединяем тип
export type UserPropsType = MSTPType & MDTPType

const MSTP = (state: AppStateType): MSTPType => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress
  }
}

let MDTP: MDTPType = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress
}

class UserContainerC extends React.Component<UserPropsType> {

  //когда компонента монтируется вызывается тело метода один раз
  componentDidMount() {

    this.props.toggleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)

      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount)
    })

  }

  //метод для кнопки переключения страницы
  onPageChanged = (b: number) => {
    this.props.toggleIsFetching(true)

    //меняем стейт
    this.props.setCurrentPage(b)

    usersAPI.getUsers(b, this.props.pageSize).then(data => {
      this.props.toggleIsFetching(false)

      this.props.setUsers(data.items)
    })
  }

  render() {

    return (
      <div>
        {this.props.isFetching
          ? <Preloader/>
          : <UserNew
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersData={this.props.usersData}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingProgress={this.props.followingProgress}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
          />
        }
      </div>
    )
  }
}

//создание контейнеркой компоненты
export const UserContainer = connect(MSTP, MDTP)(UserContainerC)










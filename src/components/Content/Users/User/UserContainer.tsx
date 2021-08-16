import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {
  initialStateType,
  setCurrentPage,
  follow,
  unfollow,
  getUsers
} from "../../../../redux/usersReducer";
import UserNew from "./UserNew";
import Preloader from '../../common/preloader/Preloader';


//Типизируем мап стейт то пропс
type MSTPType = initialStateType;

type MDTPType = {
  setCurrentPage: (currentPage: number) => void
  getUsers: (currentPage: number, pageSize: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
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
  setCurrentPage,
  getUsers,
  follow,
  unfollow
}

class UserContainerC extends React.Component<UserPropsType> {

  //когда компонента монтируется вызывается тело метода один раз
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  //метод для кнопки переключения страницы
  onPageChanged = (buttonCurrentPage: number) => {
    this.props.getUsers(buttonCurrentPage, this.props.pageSize);
    this.props.setCurrentPage(buttonCurrentPage)
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
          />
        }
      </div>
    )
  }
}

//создание контейнеркой компоненты
export const UserContainer = connect(MSTP, MDTP)(UserContainerC)










import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {
  initialStateType,
  setCurrentPageAC,
  followTC,
  unfollowTC,
  getUsersTC
} from "../../../redux/usersReducer";
import Users from "./Users";
import Preloader from '../common/preloader/Preloader';
import {
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersData,
  getUserDataSelector
} from "../../../redux/usersSelector";


//Типизируем мап стейт то пропс
type MSTPType = initialStateType;

type MDTPType = {
  setCurrentPageAC: (currentPage: number) => void
  getUsersTC: (currentPage: number, pageSize: number) => void
  followTC: (userId: number) => void
  unfollowTC: (userId: number) => void
}

//объединяем тип
export type UserPropsType = MSTPType & MDTPType

/*const MSTP = (state: AppStateType): MSTPType => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingProgress,
  }
}*/

const MSTP = (state: AppStateType): MSTPType => {
  return {
    usersData: getUserDataSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state),
  }
}

let MDTP: MDTPType = {
  setCurrentPageAC,
  getUsersTC,
  followTC,
  unfollowTC
}

class UserContainerC extends React.Component<UserPropsType> {

  //когда компонента монтируется вызывается тело метода один раз
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage, this.props.pageSize);
  }

  //метод для кнопки переключения страницы
  onPageChanged = (buttonCurrentPage: number) => {
    this.props.getUsersTC(buttonCurrentPage, this.props.pageSize);
    this.props.setCurrentPageAC(buttonCurrentPage)
  }

  render() {

    return (
      <div>
        {this.props.isFetching
          ? <Preloader/>
          : <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            usersData={this.props.usersData}
            follow={this.props.followTC}
            unfollow={this.props.unfollowTC}
            followingProgress={this.props.followingProgress}
          />
        }
      </div>
    )
  }
}

//создание контейнеркой компоненты
export const UsersContainer = connect(MSTP, MDTP)(UserContainerC)










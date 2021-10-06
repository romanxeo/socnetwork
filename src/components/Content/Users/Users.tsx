import React from 'react';
import s from './Users.module.css';
import {UsersDataArray} from "../../../redux/usersReducer";
import Paginator from '../common/Paginator/Paginator';
import User from './User/User';


type UsersPresentationForClassType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (b: number) => void
  usersData: Array<UsersDataArray>
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  followingProgress: Array<number>
}

const Users: React.FC<UsersPresentationForClassType> = props => {

  const {
    totalUsersCount,
    pageSize,
    currentPage,
    onPageChanged,
    usersData,
    follow,
    unfollow,
    followingProgress,
  } = props

  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />

      {usersData.map((u: UsersDataArray) =>

        <User
          user={u}
          follow={follow}
          unfollow={unfollow}
          followingProgress={followingProgress}
        />
      )}
    </div>
  )
}


export default Users
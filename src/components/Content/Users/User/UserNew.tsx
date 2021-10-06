import React from 'react';
import s from './User.module.css';
import {UsersDataArray} from "../../../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import noavatar from '../../../../assets/noavatar.png'
import Paginator from './Paginator';


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

const UserNew: React.FC<UsersPresentationForClassType> = props => {

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
        onPageChanged={onPageChanged}/>

      {usersData.map((u: UsersDataArray) =>
        <div key={u.id} className={s.item}>
          <NavLink to={"/profile/" + u.id}>
            <img className={s.avatar}
                 src={u.photos.small != null
                   ? u.photos.small
                   : noavatar}
                 alt="img"/>
          </NavLink>
          <span>{u.name} </span>
          <span>{u.id} </span>
          <span>{u.status} </span>
          <span>{u.photos.small} </span>
          <span>{u.photos.large} </span>
          {u.followed
            ? <button
              onClick={() => {
                unfollow(u.id)
              }}
              disabled={followingProgress.some(id => id === u.id)}
            >UNFOLLOW</button>
            : <button
              onClick={() => {
                follow(u.id)
              }}
              disabled={followingProgress.some(id => id === u.id)}
            >FOLLOW</button>}
        </div>
      )}
    </div>
  )
}


export default UserNew
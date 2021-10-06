import React from 'react'
import s from "./User.module.css";
import {NavLink} from "react-router-dom";
import noavatar from "../../../../assets/noavatar.png";
import {UsersDataArray} from "../../../../redux/usersReducer";

type PropsType = {
  user: UsersDataArray,
  follow: (userID: number) => void
  unfollow: (userID: number) => void
  followingProgress: Array<number>
}

const User: React.FC<PropsType> = props => {

  const {
    user,
    follow,
    unfollow,
    followingProgress,
  } = props


  return (

    <div key={user.id} className={s.item}>
      <NavLink to={"/profile/" + user.id}>
        <img className={s.avatar}
             src={user.photos.small != null
               ? user.photos.small
               : noavatar}
             alt="img"/>
      </NavLink>
      <span>{user.name} </span>
      <span>{user.id} </span>
      <span>{user.status} </span>
      <span>{user.photos.small} </span>
      <span>{user.photos.large} </span>
      {user.followed
        ? <button
          onClick={() => {
            unfollow(user.id)
          }}
          disabled={followingProgress.some(id => id === user.id)}
        >UNFOLLOW</button>
        : <button
          onClick={() => {
            follow(user.id)
          }}
          disabled={followingProgress.some(id => id === user.id)}
        >FOLLOW</button>}
    </div>
  )
}

export default User
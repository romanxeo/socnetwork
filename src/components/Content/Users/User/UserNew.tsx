import React from 'react';
import s from './User.module.css';
import {UsersDataArray} from "../../../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import noavatar from '../../../../assets/noavatar.png'


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

let UserNew = (props: UsersPresentationForClassType) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pagesButtonSwitcher = [];
  pagesButtonSwitcher.push(1)
  for (let i = props.currentPage - 3; i <= props.currentPage + 3; i++) {
    if (i < 3) {
      pagesButtonSwitcher.push(2, 3, 4, 5, 6)
      break;
    } else if (i > pagesCount - 3) {
      pagesButtonSwitcher.push(pagesCount - 2)
      pagesButtonSwitcher.push(pagesCount - 1)
      break;
    } else {
      pagesButtonSwitcher.push(i)
    }
  }
  pagesButtonSwitcher.push(pagesCount)

  return (
    <div>
      <div>
        {pagesButtonSwitcher.map(b =>
          <button
            className={props.currentPage === b ? s.selectedPage : s.nonSelectedPage}
            onClick={(e) => {
              props.onPageChanged(b)
            }}>{b}</button>
        )}
      </div>

      {props.usersData.map((u: UsersDataArray) =>
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
                props.unfollow(u.id)
              }}
              disabled={props.followingProgress.some(id => id === u.id)}
            >UNFOLLOW</button>
            : <button
              onClick={() => {
                props.follow(u.id)
              }}
              disabled={props.followingProgress.some(id => id === u.id)}
            >FOLLOW</button>}
        </div>
      )}
    </div>
  )
}


export default UserNew
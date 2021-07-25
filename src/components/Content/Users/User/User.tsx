import React from 'react';
import s from './User.module.css';
import {UserPropsType} from "./UserContainer";
import {v1} from "uuid";
import {UsersDataArray} from "../../../../redux/usersReducer";


const User = (props: UserPropsType) => {


    const usersData: Array<UsersDataArray> = [
        {
            id: v1(),
            firstName: 'Denis',
            lastName: 'Ivanov',
            avatar: 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png',
            status: 'HELLO',
            followed: false,
            location: {
                country: 'Ukraine',
                city: 'Kyiv'
            }
        },
        {
            id: v1(),
            firstName: 'Kirril',
            lastName: 'Petrov',
            avatar: 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png',
            status: 'GOOD TIME',
            followed: false,
            location: {
                country: 'Ukraine',
                city: 'Lviv'
            }
        },
        {
            id: v1(),
            firstName: 'Anna',
            lastName: 'Potapova',
            avatar: 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png',
            status: 'HI',
            followed: false,
            location: {
                country: 'Ukraine',
                city: 'Kherson'
            }
        },
        {
            id: v1(),
            firstName: 'Vasiliy',
            lastName: 'VASYA',
            avatar: 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png',
            status: 'HELLO',
            followed: false,
            location: {
                country: 'Russia',
                city: 'Moscow'
            }
        }
    ]

    if (props.usersData.length < 40) {
        props.setUsers(usersData)
    }


    let userElement = props.usersData.map(u =>
        <div key={u.id} className={s.item}>

            <img className={s.avatar}
                 src={u.avatar}
                 alt="img"/>
            <span>{u.firstName} </span>
            <span>{u.lastName} </span>
            <span>{u.id} </span>
            <span>{u.status} </span>
            <span>{u.location.country} </span>
            <span>{u.location.city} </span>
            {u.followed
                ? <button onClick={() => {
                    props.unfollow(u.id)
                }}>UNFOLLOW</button>
                : <button onClick={() => {
                    props.follow(u.id)
                }}>FOLLOW</button>}
        </div>
    );


    return (
        <div>
            {userElement}
            {props.usersData.length}
        </div>
    )
}

export default User;
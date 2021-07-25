import React from 'react';
import s from './User.module.css';
import {UserPropsType} from "./UserContainer";
import axios from 'axios';


const User = (props: UserPropsType) => {


    /*    const usersData: Array<UsersDataArray> = [
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
        ]*/

    let getUsers = () => {
        if (props.usersData.length < 10000) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    //мапим масив юзеров и создаем дивку для каждого юзера
    let userElement = props.usersData.map(u =>

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
                    props.unfollow(u.id)
                }}>UNFOLLOW</button>
                : <button onClick={() => {
                    props.follow(u.id)
                }}>FOLLOW</button>}
        </div>
    );

    //отрисовка jsx
    return (
        <div>
            {userElement}
            {props.usersData.length}
            <button onClick={getUsers}>Get users</button>
        </div>
    )
}

export default User;
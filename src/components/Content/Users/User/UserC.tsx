import React from 'react';
import s from './User.module.css';
import {UserPropsType} from "./UserContainer";
import axios from 'axios';




class UserC extends React.Component<UserPropsType> {

    constructor(props: UserPropsType) {
        super(props);

        this.getUsers();
    }

    getUsers = () => {
        if (this.props.usersData.length < 10000) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                {this.props.usersData.map(u =>

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
                                this.props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>FOLLOW</button>}
                    </div>
                )}
                {this.props.usersData.length}
                <button onClick={this.getUsers}>Get users</button>
            </div>
        )
    }
}

export default UserC;
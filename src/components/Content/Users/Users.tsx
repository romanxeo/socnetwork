import React from 'react';
import s from './Users.module.css';
import {UserContainer} from "./User/UserContainer";

const Users = () => {

    return (
        <div className={s.posts}>
            <UserContainer/>
        </div>
    )
}

export default Users;
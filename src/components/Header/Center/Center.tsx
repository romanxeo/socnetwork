import React from 'react';
import logo from "./logo.png";
import s from './Center.module.css';

const Center = () => {
    return (
        <div className={s.center}>
            <div>
                <img src={logo}/>
            </div>
            <a className={s.search}>Search</a>
            <a className={s.empty}></a>
            <a href="/profile" className={s.profile}>Profile</a>
            <a href="/dialogs" className={s.dialogs}>Dialogs</a>
            <a className={s.feed}>Feed</a>
            <a className={s.settings}>Settings</a>
            <a className={s.colum}></a>
            <a className={s.avatarname}>AvatarName</a>
        </div>
    )
}

export default Center;
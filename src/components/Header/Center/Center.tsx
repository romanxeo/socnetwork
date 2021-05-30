import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "./logo.png";
import s from './Center.module.css';


const Center = () => {
    return (
        <nav>
            <div className={s.center}>
                <div>
                    <img src={logo}/>
                </div>
                <a className={s.search}>Search</a>
                <a className={s.empty}></a>
                <div className={s.profile}>
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className={s.dialogs}>
                    <NavLink to="/dialogs">Dialogs</NavLink>
                </div>
                <a className={s.feed}>Feed</a>
                <a className={s.settings}>Settings</a>
                <a className={s.colum}></a>
                <a className={s.avatarname}>AvatarName</a>
            </div>
        </nav>
    )
}

export default Center;
import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from "./logo.png";
import s from './Center.module.css';


const Center = () => {
    return (
        <nav>
            <div className={s.center}>
                <img src={logo}/>
                <a className={s.search}>Search</a>
                <a className={s.empty}> </a>

                <NavLink to="/profile" className={`${s.profile} ${s.bottom}`}>Profile</NavLink>
                <NavLink to="/dialogs" className={`${s.dialogs} ${s.bottom}`}>Dialogs</NavLink>
                <NavLink to="/feed" className={`${s.feed} ${s.bottom}`}>Feed</NavLink>
                <NavLink to="/settings" className={`${s.settings} ${s.bottom}`}>Settings</NavLink>

                <a className={s.colum}> </a>
                <a className={s.avatarname}>AvatarName</a>
            </div>
        </nav>
    )
}

export default Center;
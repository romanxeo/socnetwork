import React from 'react';
import logo from "./logo.png";
import s from './Center.module.css';

const Center = () => {
    return (
        <div className={s.center}>
            <div>
                <img src={logo}/>
            </div>
            <div className={s.search}>Search</div>
            <div className={s.empty}>Empty</div>
            <div className={s.home}>Home</div>
            <div className={s.feed}>Feed</div>
            <div className={s.messages}>Messages</div>
            <div className={s.settings}>Settings</div>
            <div className={s.colum}>Colum</div>
            <div className={s.avatarname}>AvatarName</div>
        </div>
    )
}

export default Center;
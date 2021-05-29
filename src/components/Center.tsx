import React from 'react';
import logo from "./logo.png";
import './Center.css';

const Center = () => {
    return (
        <div className="center">
            <div>
                <img src={logo}/>
            </div>
            <div className="search">search</div>
            <div className="empty">Empty</div>
            <div className="home">Home</div>
            <div className="feed">Feed</div>
            <div className="messages">Messages</div>
            <div className="settings">Settings</div>
            <div className="colum">Colum</div>
            <div className="avatarname">AvatarName</div>
        </div>
    )
}

export default Center;
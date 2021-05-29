import React from 'react';
import Center from "./Center/Center"
import s from './Header.module.css';



const Header = () => {
    return (
        <div className={s.head_wrap}>
            <div className={s.left}></div>
            <Center/>
            <div className={s.right}></div>
        </div>
    )
}


export default Header;
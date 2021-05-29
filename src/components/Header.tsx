import React from 'react';
import Center from "./Center"
import './Header.css';



const Header = () => {
    return (
        <div className="head-wrap">
            <div className="left"></div>
            <Center/>
            <div className="right"></div>
        </div>
    )
}


export default Header;
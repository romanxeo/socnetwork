import React from 'react';
import preloader from "../../../../assets/preloader.svg";
import s from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={s.main}>
            <img src={preloader} className={s.preloader} alt='preloader'/>
        </div>

    )
}

export default Preloader
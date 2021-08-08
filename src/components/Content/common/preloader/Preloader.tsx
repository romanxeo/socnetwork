import React from 'react';
import preloader from "../../../../assets/preloader.svg";
import preloaderNew from "../../../../assets/preloaderNew.svg";
import s from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={s.main}>
            <img src={preloaderNew} className={s.preloader} alt='preloaderNew'/>
        </div>

    )
}

export default Preloader
import React from 'react';
import {Route} from "react-router-dom";
import s from './Content.module.css';
import Profile from "./Profile/Profile"
import Posts from "./Posts/Posts"
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import Footer from "./Footer/Footer"


const Content = () => {
    return (
            <div className={s.content_wrap}>
                <div className={s.top_left}>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/dialogs" component={Dialogs}/>
                </div>
                <div className={s.top_center}>
                    <Route path="/profile" component={Posts}/>
                    <Route path="/dialogs" component={Messages}/>
                </div>
                <div className={s.bottom_left}>
                    <Footer/>
                </div>
            </div>
    )
}

//<div className={s.content_wrap}>
//    <div className={s.profile}>Profile</div>
//    <div className={s.posts}>Posts</div>
//    <div className={s.footer}>Footer</div>
//</div>

export default Content;
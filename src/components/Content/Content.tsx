import React from 'react';
import {Route} from "react-router-dom";
import s from './Content.module.css';
import Profile from "./Profile/Profile"
import Posts from "./Posts/Posts"
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import Footer from "./Footer/Footer"
import Users from './Users/Users';

const Content = () => {
    return (
        <div className={s.content_wrap}>
            <div className={s.top_left}>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <Dialogs/>}/>
            </div>
            <div className={s.top_center}>
                <Route path="/profile" render={() => <Posts/>}/>
                <Route path="/dialogs" render={() => <Messages/>}/>
                <Route path="/users" render={() => <Users/>}/>
            </div>
            <div className={s.bottom_left}>
                <Footer/>
            </div>
            </div>
    )
}

export default Content;
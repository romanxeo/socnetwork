import React from 'react';
import {Route} from "react-router-dom";
import s from './Content.module.css';
import Posts from "./Posts/Posts"
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import Footer from "./Footer/Footer"
import Users from './Users/Users';
import Login from "./Login/Login";
import ProfileContainer from "./Profile/ProfileContainer";


const Content = () => {
  return (
    <div className={s.content_wrap}>
      <div className={s.top_left}>
        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
        <Route path="/dialogs" render={() => <Dialogs/>}/>
      </div>
      <div className={s.top_center}>
        <Route path="/profile" render={() => <Posts/>}/>
        <Route path="/dialogs" render={() => <Messages/>}/>
        <Route path="/users" render={() => <Users/>}/>
        <Route path="/login" render={() => <Login/>}/>
      </div>
      <div className={s.bottom_left}>
        <Footer/>
      </div>
    </div>
  )
}

export default Content;
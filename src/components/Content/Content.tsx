import React from 'react';
import {Route} from "react-router-dom";
import s from './Content.module.css';
import Footer from "./Footer/Footer"
import {withSuspense} from "./common/hoc/WithSuspenseHOC";

/*
import ProfileContainer from "./Profile/ProfileContainer";
import UsersContainer from "./Users/UsersContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Messages from "./Messages/Messages";
import Posts from "./Posts/Posts"
import Login from "./Login/Login";
*/

const ProfileContainer = React.lazy(() => import ("./Profile/ProfileContainer"))
const DialogsContainer = React.lazy(() => import ("./Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import ("./Users/UsersContainer"))
const Messages = React.lazy(() => import ("./Messages/Messages"))
const Posts = React.lazy(() => import ("./Posts/Posts"))
const Login = React.lazy(() => import ("./Login/Login"))

const Content = () => {
  return (
    <div className={s.content_wrap}>
      <div className={s.top_left}>
        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
      </div>
      <div className={s.top_center}>
        <Route path="/profile" render={withSuspense(Posts)}/>
        <Route path="/dialogs" render={withSuspense(Messages)}/>
        <Route path="/users" render={withSuspense(UsersContainer)}/>
        <Route path="/login" render={withSuspense(Login)}/>
      </div>
      <div className={s.bottom_left}>
        <Footer/>
      </div>
    </div>
  )
}

export default Content;
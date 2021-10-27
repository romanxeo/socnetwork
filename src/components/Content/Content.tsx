import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
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
                <Switch>
                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                </Switch>

            </div>
            <div className={s.top_center}>
                <Switch>
                    <Redirect exact from={'/'} to={'/profile'}/>
                    <Route path="/profile" render={withSuspense(Posts)}/>
                    <Route path="/dialogs" render={withSuspense(Messages)}/>
                    <Route path="/users" render={withSuspense(UsersContainer)}/>
                    <Route path="/login" render={withSuspense(Login)}/>
                    <Route path={'/404'} render={() => <h2
                        style={{textAlign: 'center', fontSize: '48px'}}>404: PAGE NOT
                        FOUND</h2>}/>
                    <Redirect from={'*'} to={'/404'}/>

                </Switch>
            </div>
            <div className={s.bottom_left}>
                <Footer/>
            </div>
        </div>
    )
}

export default Content;
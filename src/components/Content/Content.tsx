import React from 'react';
import {Route} from "react-router-dom";
import s from './Content.module.css';
import Profile from "./Profile/Profile"
import Posts from "./Posts/Posts"
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import Footer from "./Footer/Footer"

type dialogsDataArray = {
    id: number
    name: string
}

type postsDataArray = {
    id: number
    name: string
    post: string
    likesCount: number
}

type messagesDataArray = {
    id: number
    message: string
}

type contentType = {
    dialogsData: Array<dialogsDataArray>
    postsData: Array<postsDataArray>
    messagesData: Array<messagesDataArray>
}

const Content = (props: contentType) => {
    return (
        <div className={s.content_wrap}>
            <div className={s.top_left}>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData}/>}/>
            </div>
            <div className={s.top_center}>
                <Route path="/profile" render={() => <Posts postsData={props.postsData}/>}/>
                <Route path="/dialogs" render={() => <Messages messagesData={props.messagesData}/>}/>
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
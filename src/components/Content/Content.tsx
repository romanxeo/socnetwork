import React from 'react';
import {Route} from "react-router-dom";
import s from './Content.module.css';
import Profile from "./Profile/Profile"
import Posts from "./Posts/Posts"
import Dialogs from "./Dialogs/Dialogs";
import Messages from "./Messages/Messages";
import Footer from "./Footer/Footer"
import {StateType, ActionTypes} from "../../redux/state";

type PropsType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
    /*addPost: () => void
    updateNewPostText: (newText: string) => void*/
}

const Content = (props: PropsType) => {
    debugger;
    return (
        <div className={s.content_wrap}>
            <div className={s.top_left}>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}/>}/>
            </div>
            <div className={s.top_center}>
                <Route path="/profile"
                       render={() => <Posts postsData={props.state.profilePage.postsData}
                                            newPostText={props.state.profilePage.newPostText}
                           /*addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}*/
                                            dispatch={props.dispatch}
                       />}/>
                <Route path="/dialogs"
                       render={() => <Messages messagesData={props.state.dialogsPage.messagesData}
                           /*dispatch={props.dispatch}*/
                       />}/>
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
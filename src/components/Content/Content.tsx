import React from 'react';
import s from './Content.module.css';
import Profile from "./Profile/Profile"
import Posts from "./Posts/Posts"
import Footer from "./Footer/Footer"

const Content = () => {
    return (
        <div className={s.content_wrap}>
            <Profile />
            <Posts />
            <Footer />
        </div>
    )
}

//<div className={s.content_wrap}>
//    <div className={s.profile}>Profile</div>
//    <div className={s.posts}>Posts</div>
//    <div className={s.footer}>Footer</div>
//</div>

export default Content;
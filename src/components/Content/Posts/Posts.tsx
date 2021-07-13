import React from 'react';
import s from './Posts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import {NewPostContainer} from './NewPost/NewPostContainer';
import {PostContainer} from "./Post/PostContainer";

const Posts = () => {

    return (
        <div className={s.posts}>
            <NewPostContainer/>
            <PostContainer/>
        </div>
    )
}

export default Posts;
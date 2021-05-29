import React from 'react';
import s from './Posts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={s.posts}>
            <NewPost/>
            <Post name="Igor1" message="Hello world"/>
            <Post name="Valera1" message="I'm know React"/>
        </div>
    )
}

export default Posts;
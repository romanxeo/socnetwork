import React from 'react';
import s from './Posts.module.css';
import {PostContainer} from "./Post/PostContainer";
import {NewPostFormContainer} from "./NewPostForm/NewPostFormContainer";

const Posts = () => {

    return (
      <div className={s.posts}>
        <NewPostFormContainer/>
        <PostContainer/>
      </div>
    )
}

export default Posts;
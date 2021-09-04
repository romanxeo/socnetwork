import React from 'react';
import s from './Posts.module.css';
import {NewPostContainer} from './NewPost/NewPostContainer';
import {PostContainer} from "./Post/PostContainer";
import {NewPostFormContainer} from "./NewPostForm/NewPostFormContainer";

const Posts = () => {

    return (
      <div className={s.posts}>
        {/*            <NewPostContainer/>*/}
        <NewPostFormContainer/>
        <PostContainer/>
      </div>
    )
}

export default Posts;
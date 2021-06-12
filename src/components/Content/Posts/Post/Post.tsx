import React from 'react';
import s from './Post.module.css';
import {PostsDataArray} from "../../../../redux/state";

const Post = (props: PostsDataArray) => {
    return (
        <div className={s.item}>
            <img
                src="https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png"
                alt="img"/>
            <div>{props.name}</div>
            <div>{props.post}</div>
            <div>{props.id}</div>
            <div>like {props.likesCount}</div>
        </div>
    )
}

export default Post;
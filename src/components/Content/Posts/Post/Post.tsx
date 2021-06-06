import React from 'react';
import s from './Post.module.css';

type PropsType = {
    post: string
    name: string
    likesCount: number
    id: number
}

const Post = (props: PropsType) => {
    return (
        <div className={s.item}>
            <img src="https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png"/>
            <div>{props.name}</div>
            <div>{props.post}</div>
            <div>{props.id}</div>
            <div>like {props.likesCount}</div>

        </div>
    )
}

export default Post;
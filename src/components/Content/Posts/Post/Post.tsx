import React from 'react';
import s from './Post.module.css';
import {PostPropsType} from "./PostContainer";

const Post = (props: PostPropsType) => {

    let postElement = props.postsData.map(p =>
        <div key={p.id} className={s.item}>
            <img
                src="https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png"
                alt="img"/>
            <div>{p.name}</div>
            <div>{p.post}</div>
            <div>{p.id}</div>
            <div>like {p.likesCount}</div>
        </div>
    );

    return (
        <div>
            {postElement}
        </div>

    )
}

export default Post;

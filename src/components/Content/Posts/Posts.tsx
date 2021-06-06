import React from 'react';
import s from './Posts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

const Posts = () => {

    let postsData =  [
        {id: 1, name: 'VALERA', post: 'HERLfdE', likesCount: 43},
        {id: 2, name: 'Dimon', post: 'HERdsfLfdE', likesCount: 421},
        {id: 3, name: 'Kukareku', post: 'HEfsdfRLfdE', likesCount: 13},
        {id: 4, name: 'Stop', post: 'qweHERLfdE', likesCount: 5},

    ]

    let postsElement = postsData.map( p => <Post name={p.name} post={p.post} id={p.id} likesCount={p.likesCount}/>);

    return (
        <div className={s.posts}>
            <NewPost/>
            { postsElement }
        </div>
    )
}

export default Posts;
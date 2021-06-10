import React from 'react';
import s from './Posts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";

type postsDataArray = {
    id: number
    name: string
    post: string
    likesCount: number
}

type postsType = {
    postsData: Array<postsDataArray>
}

const Posts = (props: postsType) => {

    let postsElement = props.postsData.map(p => <Post name={p.name} post={p.post} id={p.id}
                                                      likesCount={p.likesCount}/>);

    return (
        <div className={s.posts}>
            <NewPost/>
            {postsElement}
        </div>
    )
}

export default Posts;
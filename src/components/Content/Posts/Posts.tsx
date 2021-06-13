import React from 'react';
import s from './Posts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import {PostsDataArray} from "../../../redux/state";

type PropsType = {
    postsData: Array<PostsDataArray>
    addPost: (post: string) => void
}

const Posts = (props: PropsType) => {

    let postsElement = props.postsData.map(p => <Post name={p.name} post={p.post} id={p.id}
                                                      likesCount={p.likesCount}/>);

    return (
        <div className={s.posts}>
            <NewPost addPost={props.addPost}/>
            {postsElement}
        </div>
    )
}

export default Posts;
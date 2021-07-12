import React from 'react';
import s from './Posts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import {PostsContainer} from './PostsContainer';

const Posts = () => {

    /*let postsElement = props.postsData.map(p => <Post name={p.name}
                                                      post={p.post}
                                                      id={p.id}
                                                      likesCount={p.likesCount}/>);*/
    {/*{postsElement}*/
    }

    return (
        <div className={s.posts}>
            <PostsContainer/>
        </div>
    )
}

export default Posts;
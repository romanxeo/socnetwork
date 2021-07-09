import React from 'react';
import s from './Posts.module.css';
import NewPost from "./NewPost/NewPost";
import Post from "./Post/Post";
import {ActionTypes, PostsDataArray} from "../../../redux/store";

type PropsType = {
    postsData: Array<PostsDataArray>
    newPostText: string
    /*addPost: () => void
    updateNewPostText: (newText: string) => void*/
    dispatch: (action: ActionTypes) => void
}

const Posts = (props: PropsType) => {

    let postsElement = props.postsData.map(p => <Post name={p.name}
                                                      post={p.post}
                                                      id={p.id}
                                                      likesCount={p.likesCount}/>);

    return (
        <div className={s.posts}>
            <NewPost newPostText={props.newPostText}
                /*addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} */
                     dispatch={props.dispatch}/>
            {postsElement}
        </div>
    )
}

export default Posts;
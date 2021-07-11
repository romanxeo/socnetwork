import React from 'react';
import {NewPostPropsType} from "../PostsContainer";


const NewPost = (props: NewPostPropsType) => {

    const onCLickHandler = () => {
        props.addPostActionCreator();
    }

    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*let newText = e.currentTarget.value*/
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value));
        /*props.updateNewPostText(e.currentTarget.value);*/
    }

    return (
        <div>
            <div>NEW POST</div>
            <textarea onChange={onPostChangeHandler} value={props.newPostText}/>
            <button onClick={onCLickHandler}>Add post</button>
        </div>
    )
}

export default NewPost;
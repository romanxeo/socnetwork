import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    addPost: (post: string) => void
    newPostText: string
    updateNewPostText: (post: string) => void
}

const NewPost = (props: PropsType) => {

    let newPost = React.createRef();

    let onCLickHandler = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let post = newPost.current.value;
        props.updateNewPostText(post);
    }

    return (
        <div>
            <div>NEW POST</div>
            <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}/>
            <button onClick={onCLickHandler}>Add post</button>
        </div>
    )
}

export default NewPost;
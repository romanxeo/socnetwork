import React, {ChangeEvent} from 'react';
import {NewPostPropsType} from "./NewPostContainer";


const NewPost = (props: NewPostPropsType) => {
    /*
        let postsElement = props.postsData.map(p => <Post name={p.name}
                                                         post={p.post}
                                                         id={p.id}
                                                         likesCount={p.likesCount}/>);*/


    const onCLickHandler = () => {
        props.addPost();
    }

    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value);
    }

    return (
        <div>
            {/*{postsElement}*/}
            <div>NEW POST</div>
            <textarea onChange={onPostChangeHandler} value={props.newPostText}/>
            <button onClick={onCLickHandler}>Add post</button>
        </div>
    )
}

export default NewPost;

// react doc => поднятие состояния

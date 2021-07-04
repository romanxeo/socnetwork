import React, {ChangeEvent} from 'react';
import store, {ActionTypes, addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

type PropsType = {
    newPostText: string
    /*addPost: () => void
    updateNewPostText: (newText: string) => void*/
    dispatch: (action: ActionTypes) => void
}


const NewPost = (props: PropsType) => {

    const onCLickHandler = () => {
        props.dispatch(addPostActionCreator());
        /*props.addPost()*/
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
import React, {ChangeEvent} from 'react';
import store, {ActionTypes} from "../../../../redux/state";

type PropsType = {
    newPostText: string
    /*addPost: () => void
    updateNewPostText: (newText: string) => void*/
    dispatch: (action: ActionTypes) => void
}

const NewPost = (props: PropsType) => {

    const onCLickHandler = () => {
        props.dispatch({type: 'ADD-POST'});
        /*props.addPost()*/
    }

    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*let newText = e.currentTarget.value*/
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value});
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
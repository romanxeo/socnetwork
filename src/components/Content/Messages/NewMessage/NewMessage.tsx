import React, {ChangeEvent} from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogsReducer";
import {ActionTypes} from "../../../../redux/store";

type PropsType = {
    newMessageText: string
    dispatch: (action: ActionTypes) => void
}

const NewMessage = (props: PropsType) => {

    const onCLickHandler = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));
    }

    return (
        <div>
            <div>NEW MESSAGE</div>
            <textarea onChange={onPostChangeHandler} value={props.newMessageText}/>
            <button onClick={onCLickHandler}>Add message</button>
        </div>
    )
}

export default NewMessage;
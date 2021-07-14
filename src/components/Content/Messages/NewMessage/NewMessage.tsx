import React, {ChangeEvent} from 'react';
import {NewMessagePropsType} from "./NewMessageContainer";


const NewMessage = (props: NewMessagePropsType) => {

    const onCLickHandler = () => {
        props.addMessage();
    }

    let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value);
    }

    return (
        <div>
            {/*{postsElement}*/}
            <div>NEW MESSAGE</div>
            <textarea onChange={onPostChangeHandler} value={props.newMessageText}/>
            <button onClick={onCLickHandler}>Add message</button>
        </div>
    )
}

export default NewMessage;
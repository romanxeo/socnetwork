import React from 'react';
import s from './Messages.module.css';
import {NewMessageContainer} from "./NewMessage/NewMessageContainer";
import {MessageContainer} from "./Message/MessageContainer";


const Messages = () => {
    return (
        <div className={s.messages}>
            <NewMessageContainer/>
            <MessageContainer/>
        </div>
    )
}

export default Messages;


/*
<NewMessage/>


{/!*            {messagesElement}


             newMessageText={props.newMessageText}
                        dispatch={props.dispatch}

            *!/}*/

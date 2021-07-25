import React from 'react';
import s from './Message.module.css';
import {MessagePropsType} from "./MessageContainer";

const Message = (props: MessagePropsType) => {

    let messageElement = props.messagesData.map(m =>
        <div key={m.id} className={s.message}>
            <div>{m.message}</div>
            <div>{m.id}</div>
        </div>
    )

    return (
        <div>
            {messageElement}
        </div>
    )
}

export default Message;
import React from 'react';
import s from './Message.module.css';

type MessageType = {
    message: string
    id: number
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>
            {props.message}
            {props.id}
        </div>
    )
}

export default Message;
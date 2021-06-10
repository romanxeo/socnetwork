import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";

type messagesDataArray = {
    id: number
    message: string
}

type messagesType = {
    messagesData: Array<messagesDataArray>
}

const Messages = (props: messagesType) => {

    let messagesElement = props.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.messages}>
            {messagesElement}
        </div>
    )
}

export default Messages;
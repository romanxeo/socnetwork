import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import {MessagesDataArray} from "../../../redux/state";

type PropsType = {
    messagesData: Array<MessagesDataArray>
}

const Messages = (props: PropsType) => {

    let messagesElement = props.messagesData.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.messages}>
            {messagesElement}
        </div>
    )
}

export default Messages;
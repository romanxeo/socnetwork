import React from 'react';
import s from './Message.module.css';
import {MessagesDataArray} from "../../../../redux/store";

const Message = (props: MessagesDataArray) => {
    return (
        <div className={s.message}>
            {props.message}
            {props.id}
        </div>
    )
}

export default Message;
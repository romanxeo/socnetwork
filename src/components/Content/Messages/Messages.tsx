import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import {ActionTypes, MessagesDataArray} from "../../../redux/state";
import NewMessage from "./NewMessage/NewMessage";

type PropsType = {
    messagesData: Array<MessagesDataArray>
    newMessageText: string
    dispatch: (action: ActionTypes) => void
}

const Messages = (props: PropsType) => {

    let messagesElement = props.messagesData.map(m => <Message message={m.message}
                                                               id={m.id}/>);

    return (
        <div className={s.messages}>
            <NewMessage newMessageText={props.newMessageText}
                        dispatch={props.dispatch}/>
            {messagesElement}
        </div>
    )
}

export default Messages;
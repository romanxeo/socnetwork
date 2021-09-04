import React from 'react';
import s from './Messages.module.css';
import {MessageContainer} from "./Message/MessageContainer";
import {NewMessageFormContainer} from './NewMessageForm/NewMessageFormContainer';
import {NewMessageContainer} from './NewMessage/NewMessageContainer';


const Messages = () => {
  return (
    <div className={s.messages}>
      {/*<NewMessageContainer/>*/}
      <NewMessageFormContainer/>
      <MessageContainer/>
    </div>
  )
}

export default Messages;

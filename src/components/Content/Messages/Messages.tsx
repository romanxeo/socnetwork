import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";



const Messages = () => {

    /*    let messagesElement = props.messagesData.map(m => <Message message={m.message}
                                                                   id={m.id}/>);*/

    return (
        <div className={s.messages}>
            <NewMessage/>


            {/*            {messagesElement}


             newMessageText={props.newMessageText}
                        dispatch={props.dispatch}

            */}


        </div>
    )
}

export default Messages;
import React from 'react';
import s from './Messages.module.css';
import Message from "./Message/Message";
import Dialog from "../Dialogs/Dialog/Dialog";


const Messages = () => {

    let messagesData =  [
        {id: 1, message: 'HERLE'},
        {id: 2, message: 'MASHA'},
        {id: 3, message: 'VALERCHI PRIYOM'},
        {id: 4, message: 'SUCHARA'},
        {id: 5, message: 'fdsfdf5435s erwtgaa'},
        {id: 6, message: 'eFGSGA DSFDSGA'},
    ]

    let messagesElement = messagesData.map( m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.messages}>
            { messagesElement }
        </div>
    )
}

export default Messages;
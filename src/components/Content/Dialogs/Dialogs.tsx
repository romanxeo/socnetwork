import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";


const Dialogs = () => {

    let dialogsData =  [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Sveta'},
        {id: 6, name: 'SANEK'},
    ]

    let dialogsElement = dialogsData.map( d => <Dialog name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            { dialogsElement }
        </div>
    )
}

export default Dialogs;
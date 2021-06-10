import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";

type dialogsDataArray = {
    id: number
    name: string
}

type dialogsType = {
    dialogsData: Array<dialogsDataArray>
}

const Dialogs = (props: dialogsType) => {

    let dialogsElement = props.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            {dialogsElement}
        </div>
    )
}

export default Dialogs;
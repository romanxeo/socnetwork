import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import {DialogsDataArray} from "../../../redux/state";

type PropsType = {
    dialogsData: Array<DialogsDataArray>
}

const Dialogs = (props: PropsType) => {

    let dialogsElement = props.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogs}>
            {dialogsElement}
        </div>
    )
}

export default Dialogs;
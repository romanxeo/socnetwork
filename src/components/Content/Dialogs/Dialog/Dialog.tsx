import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialog.module.css';

type DialogType = {
    name: string
    id: number
}

const Dialog = (props: DialogType) => {
    return (
        <NavLink to={"/dialogs/" + props.id} className={s.dialog + ' ' + s.active}> {props.name} </NavLink>
    )
}

export default Dialog;
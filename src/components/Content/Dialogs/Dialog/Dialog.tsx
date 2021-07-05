import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialog.module.css';
import {DialogsDataArray} from "../../../../redux/state";

const Dialog = (props: DialogsDataArray) => {
    return (

        <NavLink to={"/dialogs/" + props.id} className={s.dialog + ' ' + s.active}> {props.name} </NavLink>
    )
}

export default Dialog;
import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import {DialogPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogPropsType) => {

  let dialogElement = props.dialogsData.map(d =>
    <div key={d.id} className={s.dialog}>
      <NavLink to={"/dialogs/" + d.id}> {d.name} </NavLink>
    </div>
  );

  return (
    <div className={s.dialogs}>
      {dialogElement}
    </div>
  )
}

export default Dialogs;
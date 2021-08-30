import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialog.module.css';
import {DialogPropsType} from "./DialogContainer";

const Dialog = (props: DialogPropsType) => {

    let dialogElement = props.dialogsData.map(d =>
      <div key={d.id} className={s.dialog}>
          <NavLink to={"/dialogs/" + d.id}> {d.name} </NavLink>
      </div>
    );

    return (
      <div>
          {dialogElement}
      </div>
    )
}

export default Dialog;
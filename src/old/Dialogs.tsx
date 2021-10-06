import React from 'react';
import s from './Dialogs.module.css';
import {DialogsContainer} from "../components/Content/Dialogs/DialogsContainer";

const Dialogs = () => {

  return (
    <div className={s.dialogs}>
      <DialogsContainer/>
    </div>
  )
}

export default Dialogs;
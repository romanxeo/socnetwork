import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialog.module.css';
import {DialogPropsType} from "./DialogContainer";

const Dialog = (props: DialogPropsType) => {

    let dialogElement = props.dialogsData.map(d =>
        <div className={s.dialog}>
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
/*


/!*

{/!**!/}


/!*    let dialogsElement = props.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);

return (
<div className={s.dialogs}>
    {dialogsElement}
</div>
)*!/


*/
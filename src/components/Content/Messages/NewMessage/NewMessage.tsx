import React, {ChangeEvent} from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/dialogsReducer";


const NewMessage = () => {

    /*   /!* const onCLickHandler = () => {
            props.dispatch(addMessageActionCreator());
        }

        let onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value));


            /!*onChange={onPostChangeHandler} value={props.newMessageText}*!/



    /!*onClick={onCLickHandler}*!/




        }*!/*/

    return (
        <div>
            <div>NEW MESSAGE</div>
            <textarea/>
            <button>Add message</button>

        </div>
    )
}

export default NewMessage;
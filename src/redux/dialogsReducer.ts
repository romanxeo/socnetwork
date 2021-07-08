import {v1} from "uuid";
import {MessagesDataArray} from "./state";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

export const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessagesDataArray = {
                id: v1(),
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return (
        {type: ADD_MESSAGE}
    ) as const
}

export const updateNewMessageTextActionCreator = (newText: string) => {
    return (
        {type: UPDATE_NEW_MESSAGE_TEXT, newText: newText}
    ) as const
}

export default dialogsReducer;
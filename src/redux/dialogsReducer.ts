import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

//типизируем стейт
type DialogsDataArray = {
    id: string
    name: string
}
//типизируем стейт
type MessagesDataArray = {
    id: string
    message: string
}
//типизируем стейт
type initialStateType = {
    dialogsData: Array<DialogsDataArray>
    messagesData: Array<MessagesDataArray>
    newMessageText: string
}

//типизируем action который может приходить
export type ActionTypes = ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>

//инициализируем стейт с данными
let initialState: initialStateType = {
    dialogsData: [
        {id: v1(), name: 'Dima'},
        {id: v1(), name: 'Masha'},
        {id: v1(), name: 'Pasha'},
        {id: v1(), name: 'Dasha'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'SANEK12'},
    ],
    messagesData: [
        {id: v1(), message: 'HERLE1'},
        {id: v1(), message: 'MASHA'},
        {id: v1(), message: 'VALERCHI PRIYOM'},
        {id: v1(), message: 'SUCHARA'},
        {id: v1(), message: 'fdsfdf5435s erwtgaa'},
        {id: v1(), message: 'eFGSGA DSFDSGA'},
    ],
    newMessageText: ''
}

//dialogsReducer
export const dialogsReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {

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
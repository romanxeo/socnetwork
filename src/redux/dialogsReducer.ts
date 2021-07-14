import {v1} from "uuid";

const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

//типизируем стейт
export type DialogsDataArray = {
    id: string
    name: string
}
//типизируем стейт
export type MessagesDataArray = {
    id: string
    message: string
}
//типизируем стейт
export type initialStateType = {
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

            //создаем новый объект сообщения
            const newMessage: MessagesDataArray = {
                id: v1(),
                message: state.newMessageText
            }

            //делаем глубокую копию объекта стейт
            let copyState: initialStateType = {...state}
            copyState.messagesData = [...state.messagesData]

            //вносим изменения добавляем пост и затираем текст в текстариа
            copyState.messagesData.push(newMessage);
            copyState.newMessageText = '';

            return copyState;

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
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
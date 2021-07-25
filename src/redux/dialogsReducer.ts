import {v1} from "uuid";

//типы для редьюеров
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

//типизируем масив диалогов
export type DialogsDataArray = {
    id: string
    name: string
}

//типизируем масив сообщений
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
export type ActionTypes = ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>

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
const dialogsReducer = (state: initialStateType = initialState, action: ActionTypes): initialStateType => {

    switch (action.type) {
        case ADD_MESSAGE: {

            //создаем новый объект сообщения
            const newMessage: MessagesDataArray = {
                id: v1(),
                message: state.newMessageText
            }

            //делаем глубокую копию объекта стейт и ретурним ее
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage], //делаем глубокую копию сообщений и в конец добавляем новое сообщение
                newMessageText: ''
            }
        }

        case UPDATE_NEW_MESSAGE_TEXT: {

            //делаем копию стейта и вносим изменение обновление строки ввода нового сообщения и ретурним ее
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default: {
            //возращение стейта по дефолту если нет нужного типа
            return state;
        }
    }
}

//экшн креейтор на добавление сообщения
export const addMessageAC = () => {
    return (
        {type: ADD_MESSAGE}
    ) as const
}

//экшн креейтор на обновление строки в инпуте
export const updateNewMessageTextAC = (newText: string) => {
    return (
        {
            type: UPDATE_NEW_MESSAGE_TEXT,
            newText: newText
        }
    ) as const
}

export default dialogsReducer;
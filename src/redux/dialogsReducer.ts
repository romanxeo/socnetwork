import {v1} from "uuid";

export const addMessageAC = () => {
  return {type: 'DIALOGS/ADD-MESSAGE'} as const
}

export const addMessageFormAC = (newMessageText: string) => {
  return {type: 'DIALOGS/ADD-MESSAGE-FORM', newMessageText} as const
}

export const updateNewMessageTextAC = (newText: string) => {
  return {type: 'DIALOGS/UPDATE-NEW-MESSAGE-TEXT', newText} as const
}

export type addMessageAT = ReturnType<typeof addMessageAC>
export type addMessageFormAT = ReturnType<typeof addMessageFormAC>
export type updateNewMessageTextAT = ReturnType<typeof updateNewMessageTextAC>

export type ActionTypes = addMessageAT
  | addMessageFormAT
  | updateNewMessageTextAT


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
    case 'DIALOGS/ADD-MESSAGE': {

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

    case 'DIALOGS/ADD-MESSAGE-FORM': {
      const newMessage: MessagesDataArray = {
        id: v1(),
        message: action.newMessageText
      }

      //делаем глубокую копию объекта стейт и ретурним ее
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage], //делаем глубокую копию сообщений и в конец добавляем новое сообщение
        newMessageText: ''
      }
    }

    case 'DIALOGS/UPDATE-NEW-MESSAGE-TEXT': {

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

export default dialogsReducer;
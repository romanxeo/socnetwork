import {v1} from "uuid";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


export type PostsDataArray = {
    id: string
    name: string
    post: string
    likesCount: number
}
export type DialogsDataArray = {
    id: string
    name: string
}
export type MessagesDataArray = {
    id: string
    message: string
}

export type ProfilePageArray = {
    postsData: Array<PostsDataArray>
    newPostText: string
}
export type DialogsPageArray = {
    dialogsData: Array<DialogsDataArray>
    messagesData: Array<MessagesDataArray>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageArray
    dialogsPage: DialogsPageArray
}


/*const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"*/


export type ActionTypes = ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof addMessageActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator>


export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
}



let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), name: 'VALERA', post: 'HERLfdE', likesCount: 43},
                {id: v1(), name: 'Dimon', post: 'HERdsfLfdE', likesCount: 421},
                {id: v1(), name: 'Kukareku', post: 'HEfsdfRLfdE', likesCount: 13},
                {id: v1(), name: 'Stop', post: 'qweHERLfdE', likesCount: 5},

            ],
            newPostText: ''
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('state changed')
    },
    addPost() {
        const newPost: PostsDataArray = {
            id: v1(),
            name: 'name',
            post: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber();
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer; //observer //publisher subscriber
    },
    getState() {
        return this._state;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber();


        /*
        if (action.type === ADD_POST) {
            const newPost: PostsDataArray = {
                id: v1(),
                name: 'name',
                post: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber();
        } else if (action.type === ADD_MESSAGE) {

            const newMessage: MessagesDataArray = {
                id: v1(),
                message: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {

            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber();

        }*/

    }
}

/*export const addPostActionCreator = () => {
    return (
        {type: ADD_POST}
    ) as const
}

export const updateNewPostTextActionCreator = (newText: string) => {
    return (
        {type: UPDATE_NEW_POST_TEXT, newText: newText}
    ) as const
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
}*/


export default store;
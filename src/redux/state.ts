import {v1} from "uuid";

export type PostsDataArray = {
    id: string
    name: string
    post: string
    likesCount: number
}
export type DialogsDataArray = {
    id: number
    name: string
}
export type MessagesDataArray = {
    id: number
    message: string
}

export type ProfilePageArray = {
    postsData: Array<PostsDataArray>
    newPostText: string
}
export type DialogsPageArray = {
    dialogsData: Array<DialogsDataArray>
    messagesData: Array<MessagesDataArray>
}

export type StateType = {
    profilePage: ProfilePageArray
    dialogsPage: DialogsPageArray
}

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
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
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Pasha'},
                {id: 4, name: 'Dasha'},
                {id: 5, name: 'Sveta'},
                {id: 6, name: 'SANEK12'},
            ],
            messagesData: [
                {id: 1, message: 'HERLE'},
                {id: 2, message: 'MASHA'},
                {id: 3, message: 'VALERCHI PRIYOM'},
                {id: 4, message: 'SUCHARA'},
                {id: 5, message: 'fdsfdf5435s erwtgaa'},
                {id: 6, message: 'eFGSGA DSFDSGA'},
            ]
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
}

export default store;
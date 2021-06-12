export type PostsDataArray = {
    id: number
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
}
export type DialogsPageArray = {
    dialogsData: Array<DialogsDataArray>
    messagesData: Array<MessagesDataArray>
}

export type StateType = {
    profilePage: ProfilePageArray
    dialogsPage: DialogsPageArray
}

let state: StateType = {
    profilePage: {
        postsData: [
            {id: 1, name: 'VALERA', post: 'HERLfdE', likesCount: 43},
            {id: 2, name: 'Dimon', post: 'HERdsfLfdE', likesCount: 421},
            {id: 3, name: 'Kukareku', post: 'HEfsdfRLfdE', likesCount: 13},
            {id: 4, name: 'Stop', post: 'qweHERLfdE', likesCount: 5},

        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Pasha'},
            {id: 4, name: 'Dasha'},
            {id: 5, name: 'Sveta'},
            {id: 6, name: 'SANEK'},
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
}

export default state;
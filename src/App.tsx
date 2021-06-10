import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"

type dialogsDataArray = {
    id: number
    name: string
}

type postsDataArray = {
    id: number
    name: string
    post: string
    likesCount: number
}

type messagesDataArray = {
    id: number
    message: string
}

type appType = {
    dialogsData: Array<dialogsDataArray>
    postsData: Array<postsDataArray>
    messagesData: Array<messagesDataArray>
}

const App = (props: appType) => {
    return (
        <div>
            <Header/>
            <Content dialogsData={props.dialogsData} postsData={props.postsData} messagesData={props.messagesData}/>
        </div>
    );
}

export default App;

import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import {StateType} from "./redux/state";


type PropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (post: string) => void
}

const App = (props: PropsType) => {
    return (
        <div>
            <Header/>
            <Content state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default App;

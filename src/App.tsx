import React from 'react';
import s from './App.module.css';
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import {StateType} from "./redux/state";
import {addPost} from "./redux/state";

type PropsType = {
    state: StateType
}

const App = (props: PropsType) => {
    return (
        <div>
            <Header/>
            <Content state={props.state} addPost={addPost}/>
        </div>
    );
}

export default App;

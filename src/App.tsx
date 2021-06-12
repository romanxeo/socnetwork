import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import {StateType} from "./redux/state";

type PropsType = {
    state: StateType
}

const App = (props: PropsType) => {
    return (
        <div>
            <Header/>
            <Content state={props.state}/>
        </div>
    );
}

export default App;
